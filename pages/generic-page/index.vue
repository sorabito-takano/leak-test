<template>
    <div>
        <h1>Generic Page</h1>
        <div>
            <p>This is a sample text.</p>
        </div>
        <button @click="goBack">Back</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const goBack = () => {
            // Add your logic to navigate to the generic page here
            router.push('/');
        };

        return {
            goBack
        };
    }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>