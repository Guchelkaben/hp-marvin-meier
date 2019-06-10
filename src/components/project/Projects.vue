<template lang="pug">
    .project-wrapper
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
    import Project from '~/src/components/project/Project.vue';
    import ErrorHandler from '~/src/components/error/ErrorHandler.vue';

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
            }
        },

        components: {
            mmProject: Project,
            mmError: ErrorHandler
        }
    }

</script>
<style scoped>
    .project-wrapper {
        position: relative;
        background-color: #64C9FF;
        width: 100%;
        height: calc(100vh - 232px);
    }

    .project-title {
        font: 600 1.8em/1 'Raleway', sans-serif;
        color: #3C1A5B;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .5em;
        width: 100%;
        border-bottom: 5px solid #3C1A5B;
    }

    .project-title span {
        font-size: 2.5rem;
        color: #3C1A5B;
    }

    .collapsing-margins-none {
        overflow: auto;
    }
</style>