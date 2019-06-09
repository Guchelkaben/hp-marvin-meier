<template>
    <div>
        <mm-header></mm-header>
        <mm-projects></mm-projects>
    </div>
</template>

<script>

    import Header from './components/header/Header.vue';
    import Projects from './components/project/Projects.vue';

    export default {

        components: {
            mmHeader: Header,
            mmProjects: Projects
        }
    }
</script>

<style>
    * {
        color: #FFF748;
    }
</style>