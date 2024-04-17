<template>
    <main >

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
      padding: 30px;
    }

</style>