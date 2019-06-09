<template>
    <div class="d-flex p-1">
        <div class="header-link-img-wrapper d-flex justify-content-center">
            <img class="img-fluid header-link-img" :src="image.path" :alt="image.name"/>
        </div>
        <div class="p-1">
            <a :href="image.href"><span> {{image.name}} </span></a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            image: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .header-link-img {
        max-height: 25px;
    }

    .header-link-img-wrapper {
        width: 25px;
    }
</style>