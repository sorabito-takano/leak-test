<template>
    <div>
        <h1>Home Page</h1>
        <button @click="goToGenericPage">Generic Page</button>
        <button @click="goToVuetifyPage">Vuetify Page(Plain)</button>
        <button @click="goToVuetifyPageForwardRefs">Vuetify Page(forwardRefs)</button>
    </div>
</template>

<style>
button {
    margin: 10px;
    border: 1px solid #000;
    padding: 10px;
    cursor: pointer;
}
</style>
<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const goToGenericPage = () => {
            // Add your logic to navigate to the generic page here
            router.push('/generic-page');
        };

        const goToVuetifyPage = () => {
            // Add your logic to navigate to the Vuetify page here
            router.push('/vuetify-page');
        };

        const goToVuetifyPageForwardRefs = () => {
            // Add your logic to navigate to the Vuetify page here
            router.push('/vuetify-forwardrefs');
        };

        return {
            goToGenericPage,
            goToVuetifyPage,
            goToVuetifyPageForwardRefs
        };
    }
}
</script>