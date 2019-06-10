<template lang="pug">
    .d-flex.copy-input-wrapper
        .col-11.p-0
            input(v-model='value', type='text', readonly)
        .col-1.p-1.clipboard-wrapper(v-clipboard:copy='value',v-clipboard:success='onSuccess')
            .clipboard-btn.d-flex.justify-content-center
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            onSuccess() {
                console.log("geklappt");
            }
        },
        watch: {
            value() {
                this.$emit('input', this.value);
            }
        }
    }
</script>

<style scoped>
    input {
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
    }

    input[type="text"] {
        font-size: .9rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        color: #3C1A5B;
    }

    .clipboard-wrapper {
        background-color: #3C1A5B;
        transform: scale(1);
        transition: transform .3s, background-color .3s;
    }

    .clipboard-btn {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .copy-input-wrapper {
        width: 100%;
        height: 100%;
    }

    .clipboard-wrapper:hover {
        background-color: #63C9FF;
        transform: scale(1.2);
        transition: transform .3s, background-color .3s;
    }

    .clipboard-wrapper:hover svg {
        fill: #3C1A5B;
        transition: fill .3s;
    }

    svg {
        fill: #63C9FF;
        transition: fill .3s;
    }
</style>