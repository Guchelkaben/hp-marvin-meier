<template>
    <div class="header">
        <div class="container p-3">
            <div class="row justify-content-between">
                <div v-show="show" class="d-flex flex-column justify-content-between justify-content-center">
                    <mm-header-link class="mm-header-link" v-for="image in links" :image="image" :key="image.name"></mm-header-link>
                </div>
                <div>
                    

                </div>
                <div>
                    <div class="speech-bubble-wrapper">
                        <div id="speechBubble" class="p-2">
                            <div>
                                <span>Hi ! Ich bin <span>Marvin</span> und <br> bin Software-Entwickler</span>
                            </div>
                        </div>
                    </div>
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
    import anime from 'animejs';

    export default {
        data() {
            return {
                show: false
            }
        },
        mounted() {
            this.show = true;
            this.animateLinks();
        },

        computed: {
            links() {
                headerLinks.map(links => links.path = images[`${links.name}-logo`]);
                return headerLinks;
            }
        },
        methods: {
            animateLinks() {
                anime({
                    targets: '.mm-header-link',
                    translateX: 300,
                    direction: 'reverse',
                    delay: anime.stagger(100, {from: 'center'})
                });

                anime({
                    targets: '.speech-bubble-wrapper',
                    opacity: 1,
                    duration: 1000,
                    easing: 'linear',
                    delay: 1500
                });
            },
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

    .speech-bubble-wrapper {
        position: relative;
        opacity: 0;
    }

    #speechBubble {
        position: absolute;
        top: 0;
        left: -105%;
        border-radius: 10px;
        background-color: #64C9FF;
        max-width: 250px;
        font-family: 'Open Sans', sans-serif;
    }

    #speechBubble::before {
        content: "";
        display: block;
        width: 0;
        position: absolute;
        right: 5px;
        top: 90%;
        border-style: solid;
        border-width: 15px;
        border-color: #64C9FF transparent transparent #64C9FF;
        transform: rotate(90deg);
    }

    #speechBubble span {
        color: #3C1A5B;
    }
</style>