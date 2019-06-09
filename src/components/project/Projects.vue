<template>
    <div class="project-wrapper">
        <div class="container">

            <div v-for="project in projects"></div>
        </div>
    </div>
</template>

<script>

    import {fetchRepositories} from './github-fetcher';

    export default {
        data() {
            return {
              projects: []
            };
        },
        created() {
            this.projects = fetchRepositories();
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