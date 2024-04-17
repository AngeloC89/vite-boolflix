<template>

    <div class="card my-4" >
        <div class="card-body d-flex flex-column justify-content-end align-items-center">
            <h5 class="card-title">{{title}}</h5>
            <h6 class="card-text">{{originalTitle}}</h6>
            <p>{{language}}</p>
            <p>{{vote}}</p>
          </div>
    </div>



</template>

<script>
    export default {
        name: 'CardComponent',
        props: [
            'image',
            'title',
            'orignalTitle',
            'language',
            'description',
            'vote',

        ]
    }
</script>


<style lang="scss" scoped>
.card{
    min-height: 470px;
}
</style>