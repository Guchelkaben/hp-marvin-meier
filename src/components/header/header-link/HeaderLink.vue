<template>
    <div class="d-flex p-1">
        <div class="header-link-img-wrapper d-flex justify-content-center align-items-center">
            <img class="d-block img-fluid header-link-img" :src="image.path" :alt="image.name"/>
        </div>
        <div class="p-1 ml-2">
            <a :href="image.href"><span class="m-font-color"> {{formatImageName(image.name)}} </span></a>
        </div>
    </div>
</template>

<script>

    import {capitalizeFirstLetter} from '~/src/components/utils/string-helper.js';

    export default {
        methods: {
          formatImageName(name) {
              return capitalizeFirstLetter(name);
          }
        },
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
        background-color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
</style>