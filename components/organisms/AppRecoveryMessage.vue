<template>
    <div class="relative z-10 h-full p-5 text-13" id="forget_password_message">
        <div class="pt-8">
            <div data-v-16a9d1f1=""
                class="relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 mb-12">
                <div data-v-16a9d1f1="" class="gradient absolute inset-0 opacity-[0.15]"></div><img data-v-16a9d1f1=""
                    src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" class="h-20 w-20 object-cover">
                <div data-v-16a9d1f1="">
                    <div data-v-16a9d1f1="" class="mb-1 text-base font-semibold">Password Recovery</div>
                    <div data-v-16a9d1f1="" class="text-white/70"> Retrieve your password <br data-v-16a9d1f1="">
                        account through your <br data-v-16a9d1f1=""> registration mail </div>
                </div>
            </div>
            <div class="mb-6 flex flex-col items-center px-6">
                <div class="mb-24 flex w-full items-center justify-between leading-none text-white/70">
                    <div class="font-semibold">Recovery link sent to:</div>
                    <div class="group flex cursor-pointer items-center gap-1 text-xs">
                        <div class="group-hover:underline">{{ userStore.currentUser.email }}</div><i
                            class="fa-solid fa-pen-to-square text-base opacity-0 group-hover:opacity-100"></i>
                    </div>
                </div>
                <div class="mb-32 text-center text-base text-white/70"> Check your email to change <br> your
                    password!
                </div>
                <AppButton buttonText="Send Email Again" buttonVariant="Gray" />
            </div>
        </div>
    </div>

</template>

<script>
import { useUserStore } from '@/stores/userStore';
import AppButton from '../components/atoms/AppButton.vue';

export default {
    components: {
        AppButton,
    },
    methods: {
        handleBackClick() {
            this.$emit('go-to-sign-in');
        }
    },
    setup() {
        const userStore = useUserStore();
        return {
            userStore
        }
    }
};
</script>