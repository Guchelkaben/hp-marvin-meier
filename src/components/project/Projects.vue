<template>
    <div class="project-wrapper">
        <div class="container" v-if="state === 'success'">
            <h1>Public GitHub projects</h1>
            <div class="row flex-row justify-content-center mt-5">
                <mm-project v-for="project in projects" class="col-md-12 col-lg-6 " :project="project"></mm-project>
            </div>
        </div>
        <div v-else="state === 'fail'">
            
        </div>
    </div>
</template>

<script>
    import {fetchRepositories} from './github-fetcher';
    import Project from '~/src/components/project/Project.vue';

    export default {
        data() {
            return {
                projects: [],
                state: 'init'
            };
        },
        async created() {
            try {
                this.projects = await fetchRepositories();
                this.state = 'success';
            } catch (e) {
                this.state = 'fail';
            }

            console.log(this.projects);
        },
        components: {
            mmProject: Project
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