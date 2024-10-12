<script>
import AppBackButton from '../atoms/AppBackButton.vue';
import AppSubmitButton from '../atoms/AppSubmitButton.vue';
import AppTextInput from '../atoms/AppTextInput.vue';
import AppWelcome from '../molecules/AppWelcome.vue';
import { useUserStore } from '@/stores/userStore';




export default {
    components: {
        AppSubmitButton,
        AppTextInput,
        AppWelcome,
        AppBackButton
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
                        <div class="mb-4 flex h-2 w-full justify-end text-center text-xs">
                            <div class="cursor-pointer text-white/50 underline hover:text-white">
                                Forgot Password? </div>
                        </div>
                        <AppSubmitButton />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
