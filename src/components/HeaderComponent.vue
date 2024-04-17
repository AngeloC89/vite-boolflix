<template>
    <header class="bg-black">
        <nav class="navbar navbar-light bg-light justify-content-between bg-black">
            <div id="logo">
                <img class="img-fluid" src="/images/BoolFlix.png" alt="Logo BoolFlix">
            </div>
            <form class="form-inline d-flex">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>
#logo{
    width: 300px;
}
</style>