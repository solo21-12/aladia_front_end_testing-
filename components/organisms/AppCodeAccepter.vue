<template>
    <div id="code_accepter"
        class="relative inset-0 z-[90] flex items-center justify-center bg-black/40 text-white backdrop-blur py-1">
        <div
            class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-100 backdrop-blur transition-opacity duration-300">
            <div class="relative z-10 h-full p-5 text-sm">
                <div class="flex flex-col items-center px-6 pt-8">
                    <img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" class="h-20 w-20 object-cover"
                        alt="Aladia logo">

                    <AppHeaderText :header="userStore.currentUser.name" class="mb-8" />

                    <AppText text="Thanks for joining Aladia." class="mb-6" />

                    <div class="mb-8 text-center">
                        <AppText text="Please enter the 6-digit code we sent you via email:" />
                    </div>

                    <div class="relative mb-4 flex h-10 w-full justify-between text-xl text-black gap-3">
                        <AppCodeInput v-for="n in 6" :key="n" :code="codeDigits[n - 1]" :index="n - 1"
                            @input="updateCode" :data-testid="'code-input-' + (n - 1)" />
                    </div>
                    <div class="mb-8 flex justify-center text-xs text-white/50">
                        Didn't receive any email?
                    </div>
                    <AppButton :buttonText="'Enter'" :buttonVariant="'Gray'" :loading="false"
                        :isDisabled="!isEmailEntered" @click="submitCode" data-id="submit_code" />

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore';
import AppCodeInput from '../atoms/AppCodeInput.vue';
import AppButton from '../atoms/AppButton.vue';
import AppText from '../atoms/AppText.vue';
import AppHeaderText from '../atoms/AppHeaderText.vue';

export default {
    components: {
        AppCodeInput,
        AppButton,
        AppText,
        AppHeaderText
    },
    setup() {
        const userStore = useUserStore();

        return {
            userStore
        };
    },
    data() {
        return {
            codeDigits: ['', '', '', '', '', '']
        };
    },
    methods: {
        updateCode({ value, index }) {
            this.codeDigits[index] = value;  // Direct array mutation in Vue 3
            const nextInput = document.querySelectorAll('input')[index + 1];
            if (nextInput) nextInput.focus();
        },
        submitCode() {
            this.$emit('showMessage');
            const code = this.codeDigits.join('');
        }
    }
};
</script>

<style scoped>
.text-sm {
    font-size: 0.8125rem;
}
</style>
