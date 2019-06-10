<template lang="pug">
    .container
        .d-flex.justify-content-center.align-items-center.error-container
            div
                .mb-3.error-text
                    p.text-center {{generateErrorMessage()}}
                img.d-block.mx-auto.img-fluid.error-img(src="./../../assets/images/error-logo.png" alt="error-image")
</template>

<script>
    const SERVICE_UNAVAILABLE = "Oh noo! Someone cut the internet - please try it later again";

    export default {
        props: {
            statusCode: {
                type: Number,
                required: true
            }
        },
        methods: {
            generateErrorMessage() {
                switch (this.statusCode) {
                    case 403:
                        return SERVICE_UNAVAILABLE;
                }

                return SERVICE_UNAVAILABLE;
            }
        }
    }
</script>

<style scoped>
    .error-container {
        height: calc(100vh - 232px);
    }

    .error-img {
        max-height: 350px;
    }

    .error-text {
        font-size: 1.5rem;
    }
</style>