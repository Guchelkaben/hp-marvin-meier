<template lang="pug">
    .card
        .card-body
            h5.card-title {{formatImageName(project.name)}}
            p.card-text {{repo.description}}
            .d-flex.align-items-center.justify-content-between
                .mr-2
                    a.btn.btn-primary(:href='repo.html_url') GitHub
                mm-clipboard(v-model='link')
</template>

<script>
    import {fetchRepoByName} from './github-fetcher';
    import {capitalizeFirstLetter} from '~/src/components/utils/string-helper.js';
    import InputClipboard from '~/src/components/input-clipboard/InputClipboard.vue';

    export default {
        props: {
            project: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                repo: {},
                link: 'OnLoad'
            }
        },

        methods: {
            formatImageName(name) {
                return capitalizeFirstLetter(name);
            }
        },

        async created() {
            this.repo = await fetchRepoByName(this.project.url);
            this.link = this.repo.git_url;
        },

        components: {
            mmClipboard: InputClipboard
        }
    }
</script>

<style scoped>
    .card * {
        color: #3C1A5B;
    }

    .card a {
        background-color: #FFF748;
        color: #3C1A5B;
        border: 1px solid #FFF748;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        transform: scale(1);
        transition: transform .3s, background-color .3s;
    }

    .btn-primary:hover {
        background-color: #63C9FF;
        border: 1px solid #63C9FF;
        transform: scale(1.1);
        transition: transform .3s, background-color .3s, border .3s;
    }

    .card-text {
        max-height: 50px;
        min-height: 50px;
    }
</style>