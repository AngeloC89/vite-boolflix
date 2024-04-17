<template>

    <div class="card my-4" >
        <img class="card-img-top img-fluid  " :src="image" :alt="title">
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


<style lang="scss" scoped>
img{
    min-height: 470px;
}
</style>