<script>
import AppBackButton from '../atoms/AppBackButton.vue';
import AppButton from '../atoms/AppButton.vue';
import AppTextInput from '../atoms/AppTextInput.vue';
import AppWelcome from '../molecules/AppWelcome.vue';
import { useUserStore } from '@/stores/userStore';
import AppText from '../atoms/AppText.vue';




export default {
    components: {
        AppButton,
        AppTextInput,
        AppWelcome,
        AppBackButton,
        AppText
    },
    setup(props, { emit }) {
        const userState = useUserStore();

        const handleSubmit = () => {
            console.log("sign in")
        };

        const handleBackClick = () => {
            emit('go-back');
        };

        return {
            handleSubmit,
            handleBackClick
        };
    }
}
</script>

<template>
    <div
        class="relative text-sm inset-0 z-[90] flex items-center justify-center bg-black/40 text-white backdrop-blur py-1">
        <div
            class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-100 backdrop-blur transition-opacity duration-300">
            <div class="relative z-10 h-full p-5 text-13 bg-black/40">
                <div>
                    <AppBackButton @onClick="handleBackClick" />

                    <div>
                        <AppWelcome />
                    </div>
                    <div class="mb-6 text-center">Enter your password</div>
                    <div class="mb-6 flex flex-col items-center px-4">
                        <AppTextInput placeholder="Password" type="password" iconClass="fa-solid fa-key" />
                        <AppText text="Forgot password?" :is-link="true" link="/" class="mb-4" />
                        <AppButton :buttonText="'Enter'" :buttonVariant="'Gray'" :loading="false"
                            :isDisabled="!isEmailEntered" @click="handleSubmit" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
