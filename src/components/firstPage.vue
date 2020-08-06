<template>
    <div class="container">
        <tableComponent :elements="elements.bids">Bids</tableComponent>
        <tableComponent :elements="elements.asks">Ask</tableComponent>
    </div>
</template>

<script>

import tableComponent from './tableComponent.vue'

export default{
    name: 'firstPage',
    data:() => ({
        elements:{
            bids: [],
            asks: []
        },
        connection: null
    }),
    props:['symbol', 'limit'],
    components:{
        tableComponent
    },
    async created() {
    await this.getData();
    this.subscribeOnUppdate();
    this.$eventBus.$on("symbol",  (symbol) => {
        this.symbol = symbol;
        this.connection.close();
        this.subscribeOnUppdate();
    });
  },
  methods : {
    async getData () {
        let elements = await this.$sdk.get(this.symbol, this.limit);
            elements.bids = elements.bids.reverse();
            elements.asks = elements.asks.reverse();
            this.elements = elements;
    },
    subscribeOnUppdate () {
        this.connection = this.$sdk.subscribe(this.symbol);

        this.connection.onmessage = async event => {
            let data = JSON.parse(event.data);
            let [newAsks, newBids] = [                    
            data.a.filter(elem => elem[1] != 0),    
            data.b.filter(elem => elem[1] != 0) 
            ];


            newAsks.reverse();
            newBids.reverse();

            this.elements.asks.splice(this.elements.asks.length - newAsks.length, newAsks.length);
            this.elements.bids.splice(this.elements.bids.length - newBids.length, newBids.length);

            this.elements.asks = [...newAsks, ...this.elements.asks];
            this.elements.bids = [...newBids, ...this.elements.bids];
      };
    }
  }
}
</script>

<style>
.container{
    display: flex;
    justify-content: space-between;
}
</style>