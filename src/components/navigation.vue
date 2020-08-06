<template>
    <div class="menu">
        <a href="#"
        v-for="tab in navData.allTabs"
        :key=tab
        class="menu__button"
        :class="{ active: navData.nowTab === tab }"
        @click.prevent="changeTabs(tab)"
        >{{tab}}</a>   
    </div>
</template>


<script>
    export default{
        name: 'navbar',
        props: ['navData'],
        methods:{
            changeTabs(tab){
                this.$emit('changeTab', tab);
            }
        }
    }
</script>

<style scoped>
.menu{
    display: flex;
    justify-content: space-between;
}

.menu__button{
    padding: 15px 0;
    flex-basis: 49.9%;
    font-size: 24px;
    text-align: center;
    text-decoration: none;
    color:#fff;
    background-color: #000;
    opacity: 0.5;
}

.active{
    opacity: 1;
}


</style>