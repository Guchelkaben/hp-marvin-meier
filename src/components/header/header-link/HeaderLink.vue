<template lang="pug">
    .d-flex.p-1
        .header-link-img-wrapper.d-flex.justify-content-center.align-items-center
            img.d-block.img-fluid.header-link-img(:src='image.path', :alt='image.name')
        .p-1.ml-2
            a(:href='image.href', target='_blank')
                span.m-font-color  {{formatImageName(image.name)}}
</template>

<script>
    import {capitalizeFirstLetter} from '../../utils/string-helper.js';

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

    a span {
        background-color: transparent;
        padding: 0;
        font-size: 1rem;
        transition: padding .3s, font-size .3s, background-color .3s;
    }

    a:hover span {
        background-color: #64C9FF;
        padding: 5px;
        font-size: 1.1rem;
        transition: padding .3s, font-size .3s, background-color .3s;
    }

    a:hover {
        text-decoration: none;
    }
</style>