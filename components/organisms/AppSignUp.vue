<template>
    <div id="signup" class="relative app-login-form ...">
        <div class="relative flex h-[40rem] w-[26rem] flex-col ...">
            <div class="relative z-10 h-full p-5 text-13 bg-black/40">
                <div class="pt-8">
                    <AppWelcome />
                    <div class="mb-6 text-center">Enter your email</div>
                    <div class="mb-6 flex flex-col items-center px-4">
                        <AppTextInput placeholder="Email" iconClass="fa-solid fa-envelope"
                            v-model="userStore.currentUser.email" required data-testid="email-input" />
                        <AppSubmitButton :isDisabled="!isEmailEntered" @click="handleSubmit" />
                        <AppSocial />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';
import AppSubmitButton from '../atoms/AppSubmitButton.vue';
import AppTextInput from '../atoms/AppTextInput.vue';
import AppSocial from '../molecules/AppSocial.vue';
import AppWelcome from '../molecules/AppWelcome.vue';

export default {
    components: {
        AppSubmitButton,
        AppTextInput,
        AppSocial,
        AppWelcome
    },

    setup(props, { emit }) {
        const userStore = useUserStore();

        const isEmailEntered = computed(() => {
            return !!userStore.currentUser.email;
        });

        const handleSubmit = () => {
            userStore.checkEmailInDatabase();

            if (userStore.existingUser) {
                emit('go-to-sign-in');
            } else {
                emit('go-to-more-details');
            }
        };

        return {
            userStore,
            isEmailEntered,
            handleSubmit
        };
    }
};
</script>
