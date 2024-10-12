<template>
    <div id="message"
        class="relative inset-0 z-[90] flex items-center justify-center bg-black/40 text-white backdrop-blur py-1">
        <div
            class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-100 backdrop-blur transition-opacity duration-300">
            <div class="relative z-10 h-full p-5 text-sm">
                <div class="flex flex-col items-center px-6 pt-8">

                    <div class="mb-6 text-lg font-semibold">{{ userName }}</div>
                    <div class="mb-8 text-white/70">Thanks for joining Aladia.</div>
                    <img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" class="h-32 w-32 object-cover my-14"
                        alt="Aladia logo" />

                    <AppSubmitButton :onClick="submitCode" buttonText="Enter Marketplace" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore';
import AppSubmitButton from '../atoms/AppSubmitButton.vue';

export default {
    components: {
        AppSubmitButton
    },
    setup() {
        const userStore = useUserStore();
        const userName = userStore.currentUser.name
        const submitCode = () => {
            console.log('Submit button clicked');
        };
        return {
            userName,
            submitCode
        };
    }
};
</script>

<style scoped>
*,
:after,
:before {
    box-sizing: border-box;
}
</style>
