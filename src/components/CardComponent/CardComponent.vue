<template>

    <div class="card my-4" >
        <img class="card-img-top" :src="image" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <p class="card-text">{{ language }}</p>
            <p class="card-text">{{ vote }}</p>
        </div>
    </div>



</template>

<script>
    export default {
        name: 'CardComponent',
        props: [
            'image',
            'title',
            'language',
            'description',
            'vote',

        ]
    }
</script>

<style lang="scss" scoped></style>