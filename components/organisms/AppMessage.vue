<template>
    <div id="message"
        class="relative inset-0 z-[90] flex items-center justify-center bg-black/40 text-white backdrop-blur py-1">
        <div
            class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-100 backdrop-blur transition-opacity duration-300">
            <div class="relative z-10 h-full p-5 text-sm">
                <div class="flex flex-col items-center px-6 pt-8">

                    <AppHeaderText :header="userName" class="mb-6" />
                    <AppText :text="'Thanks for joining Aladia.'" class="mb-8" />
                    <img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" class="h-32 w-32 object-cover my-14"
                        alt="Aladia logo" />

                    <AppButton :buttonText="'Enter Marketplace'" :buttonVariant="'Gray'" :loading="false"
                        :isDisabled="!isEmailEntered" @click="submitCode" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore';
import AppButton from '../atoms/AppButton.vue';
import AppText from '../atoms/AppText.vue';
import AppHeaderText from '../atoms/AppHeaderText.vue';

export default {
    components: {
        AppButton,
        AppText,
        AppHeaderText
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
