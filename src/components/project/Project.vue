<template lang="pug">
    .card
        .card-body
            .d-flex.justify-content-between
                h5.card-title {{capitalizeFirstLetter(project.name)}}
                div.prog-lang(v-if="languages.length > 0")
                    | written in: &nbsp;
                    span.lang-java(v-for="progLang in languages") {{capitalizeFirstLetter(progLang)}}
            p.card-text {{repo.description}}
            .d-flex.align-items-center.justify-content-between
                .mr-2
                    a.btn.btn-primary(:href='repo.html_url') GitHub
                mm-clipboard(v-model='link')
</template>

<script>
    import {fetchRepoByName, fetchRepoLanguages} from './github-fetcher';
    import {capitalizeFirstLetter} from '../utils/string-helper.js';
    import InputClipboard from '../input-clipboard/InputClipboard.vue';

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
                link: 'OnLoad',
                languages: []
            }
        },

        methods: {
            capitalizeFirstLetter(name) {
                return capitalizeFirstLetter(name);
            }
        },

        async created() {
            try {
                this.repo = await fetchRepoByName(this.project.url);
                this.link = this.repo.html_url;

                const langResponse = await fetchRepoLanguages(this.repo.name);
                this.languages = Object.keys(langResponse);
            } catch ({status}) {
                this.$emit('error', status);
            }
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

    .prog-lang span {
        margin: 2px;
        display: inline-flex;
        align-content: center;
        justify-content: center;
        min-width: 0;
        padding-left: 4px;
        padding-right: 4px;
        border-style: solid;
        border-width: 1px;
        border-radius: 3px;
        font-size: .8rem;
        line-height: 1.84615385;
        text-decoration: none;
        vertical-align: middle;
        white-space: nowrap;
        border-color: transparent;
        background-color: #E1ECF4;
        color: #2c5777;
    }

    .lang-java {
        background-color: brown;
    }

    .card-text {
        max-height: 50px;
        min-height: 50px;
    }
</style>