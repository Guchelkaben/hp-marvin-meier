<template lang="pug">
    .project-wrapper
        .container
            div(v-if="state === 'success'")
                h1 Public GitHub projects
                .row.flex-row.justify-content-lg-start.mt-5
                    mm-project.col-md-12.col-lg-6(v-for='project in projects', :project='project')
            div(v-else="state === 'fail'")
                mm-error(:statuscode='error.statusCode')
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
                this.state = 'fail';
                this.error.statusCode = status;
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
</style>