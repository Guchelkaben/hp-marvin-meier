<template lang="pug">
    .project-wrapper
        .arrow-left(@click="loadNextPage")
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16"><path fill-rule="evenodd" d="M6 3L0 8l6 5v-3h4V6H6V3z"/></svg>
        .arrow-right(@click="loadBeforePage")
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16"><path fill-rule="evenodd" d="M10 8L4 3v3H0v4h4v3l6-5z"/></svg>
        .container.collapsing-margins-none
            .mt-5(v-if="state === 'success'")
                .row
                    h1.project-title
                        span G
                        | ITHUB-
                        span P
                        | ROJECTS

                .row.flex-row.justify-content-lg-start.mt-2
                    mm-project.col-md-12.col-lg-6(v-for="project in projects", :project="project" @error="onError")
            .mt-5(v-else="state === 'fail'")
                mm-error(:statusCode='error.statusCode')
            .mt-5(v-else)
                | loading
</template>

<script>
    import {fetchRepositories} from './github-fetcher';
    import Project from '~/components/project/Project.vue';
    import ErrorHandler from '~/components/error/ErrorHandler.vue';

    export default {
        data() {
            return {
                projects: [],
                state: 'init',
                error: {
                    statusCode: 0
                }
            };
        },
        async created() {
            try {
                this.projects = await fetchRepositories();
                this.state = 'success';
            } catch ({status}) {
                this.onError(status);
            }
        },

        methods: {
            onError(status) {
                this.error.statusCode = status;
                this.state = 'fail';
            },
            loadNextPage() {

            },
            loadBeforePage() {

            }
        },

        components: {
            mmProject: Project,
            mmError: ErrorHandler
        }
    }

</script>
<style scoped>
    .project-title {
        font: 600 1.8em/1 'Raleway', sans-serif;
        color: #3C1A5B;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .5em;
        width: 100%;
        border-bottom: 5px solid #3C1A5B;
    }

    .project-wrapper {
        position: relative;
        background-color: #64C9FF;
        width: 100%;
        height: calc(100vh - 251px);
    }

    .arrow-left, .arrow-right  {
        position: absolute;
        top: 40%;
        fill: rgba(60,26,91,0.5);
        transform: scale(8);
    }

    .arrow-left {
        left: 8%;
    }

    .arrow-right {
        right: 8%;
    }

    .project-title span {
        font-size: 2.5rem;
        color: #3C1A5B;
    }

    .collapsing-margins-none {
        overflow: auto;
    }
</style>