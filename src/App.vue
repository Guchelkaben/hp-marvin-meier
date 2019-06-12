<template>
    <div>
        <mm-header></mm-header>
        <mm-projects></mm-projects>
        <mm-imprint></mm-imprint>
    </div>
</template>

<script>
    require("@babel/polyfill");
    import Header from './components/header/Header.vue';
    import Projects from './components/project/Projects.vue';
    import Imprint from './components/imprint/Imprint.vue';

    export default {
        components: {
            mmHeader: Header,
            mmProjects: Projects,
            mmImprint: Imprint
        }
    }
</script>

<style>
    * {
        color: #FFF748;
    }


</style>