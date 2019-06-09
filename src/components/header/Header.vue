<template>
    <div class="container">
        <div class="row">
            <div>
                <mm-header-link v-for="image in links" :image="image" :key="image.name" ></mm-header-link>
            </div>
            <div>
                <img />
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