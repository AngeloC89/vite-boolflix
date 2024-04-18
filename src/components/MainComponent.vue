<template>
    <main>

        <CardList />


    </main>
</template>

<script>
    import CardList from './CardComponent/CardList.vue';

    export default {
        name: 'MainComponent',
        components: {
            CardList
        }

    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;

    main {
        background-color: $backgroundcolor;
        background-image: url(../images/BBBB.png);
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: 15%;
        min-height: 100vh;
        padding: 30px;
        height: 100vh;
        overflow-y: auto;

    }

</style>