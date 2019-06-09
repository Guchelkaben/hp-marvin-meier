<template>
    <div class="header">
        <div class="container p-3">
            <div class="row justify-content-between">
                <div class="d-flex flex-column justify-content-between justify-content-center">
                    <mm-header-link v-for="image in links" :image="image" :key="image.name"></mm-header-link>
                </div>

                <div>
                    <div>
                        <span>Marvin Meier</span>
                    </div>
                    <div>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                <div>
                    <img class="img-fluid img-avatar" src="~src/assets/images/avatar.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import images from '../../assets/images/*.png';
    import {headerLinks} from '~/src/assets/files/header-links.js';
    import HeaderLink from './header-link/HeaderLink.vue';

    export default {
        computed: {
            links() {
                headerLinks.map(links => links.path = images[`${links.name}-logo`]);
                return headerLinks;
            }
        },
        components: {
            mmHeaderLink: HeaderLink
        }
    }
</script>

<style>
    .header {
        background-color: #3C1A5B;
    }

    .m-font-color {
        color: #FFF748;
        font-family: 'Open Sans', sans-serif;
    }

    .img-avatar {
        max-height: 200px;
    }
</style>