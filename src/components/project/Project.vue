<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{project.name}}</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div class="d-flex">
                <div >
                    <a :href="repo.html_url" class="btn btn-primary">GitHub</a>
                </div>
                <mm-clipboard></mm-clipboard>
            </div>
        </div>
    </div>
</template>

<script>
    import {fetchRepoByName} from './github-fetcher';
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
                link: 'asd'
            }
        },

        methods: {
            onSuccess() {
                console.log("yeah");
            }
        },

        async created() {
            this.repo = await fetchRepoByName(this.project.url);
            this.link = this.repo.git_url;
        },

        components: {
            mmClipboard : InputClipboard
        }
    }
</script>

<style>

    .card * {
        color: #3C1A5B;
    }

    .card a {
        background-color: #FFF748;
        color: #3C1A5B;
        border: 1px solid #FFF748;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
    }

    .copy-input {
        width: 100%;
        font-size: ;
    }

    .copy-input-wrapper {
        width: 100%;
        height: 100%;
    }
</style>