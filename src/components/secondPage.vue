<template>
    <div class="menu">
        <div class="menu__title">Выберите символ</div>
        <select class="menu__selectSymbol" v-model="nowSymbol">
            <option
            v-for="(elem, index) in elements"
            :key="index"
            >{{ elem }}</option
            >
        </select>
    </div>
</template>

<script>

export default{
    name: 'secondPage',
    data:() => ({
        elements: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
        nowSymbol: 'BTCUSDT'
    }),
    watch: {
        nowSymbol(symbol) {
            this.$eventBus.$emit('symbol', symbol);
        }
    }
}
</script>

<style scoped>
.menu{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.menu__title{
    margin: 15px;
    font-size: 25px;
}
.menu__selectSymbol{
    width: 80%;
}
</style>