<template>
  <div id="app">
    <Navigation
    :navData="navData"
    @changeTab="(tab) => this.navData.nowTab = tab"
    />
    <div class="symbol"
    @symbol2="(symbol) => console.log(symbol)"
    >Symbol: {{ symbol }}</div>

    <keep-alive> 
      <component :is="this.navData.nowTab" :symbol="symbol" :limit="limit" ></component>
    </keep-alive>
  </div>
</template>

<script>

import Navigation from './components/navigation'
import FirstPage from './components/firstPage'
import SecondPage from './components/secondPage'

export default {
  name: 'App',
  data: () => ({
    navData: {
      allTabs: ["FirstPage", "SecondPage"],
      nowTab: "FirstPage",
    },
    symbol: "BTCUSDT",
    limit: 500
  }),
  components: {
    Navigation,
    FirstPage,
    SecondPage
  },
  methods:{
    changeTabs(tab){
      this.nowTab = tab;
    }
  },
  async created(){
    this.$eventBus.$on("symbol",  (symbol) => {
      this.symbol = symbol;
    });
  }
}
</script>

<style>
body{
  font-size: 14px;
}

.symbol{
  padding: 5px;
  font-size: 20px;
  border: 1px solid black;
}
@media screen and (max-device-width: 370px){
  body{
    font-size: 11px;
  }
}
</style>
