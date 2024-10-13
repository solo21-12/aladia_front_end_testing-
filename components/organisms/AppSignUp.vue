<template>
    <div id="signup" class="relative app-login-form ...">
        <div class="relative flex h-[40rem] w-[26rem] flex-col ...">
            <div class="relative z-10 h-full p-5 text-13 bg-black/40">
                <div class="pt-8">
                    <AppWelcome />

                    <AppText text="Enter your email" class="mb-4 text-center" />

                    <div class="mb-6 flex flex-col items-center px-4">
                        <!-- Updated AppTextInput with validation -->
                        <AppTextInput placeholder="Email" iconClass="fa-solid fa-envelope"
                            v-model="userStore.currentUser.email" :rules="emailRules" required
                            data-testid="email-input" />
                        <AppButton :buttonText="'Enter'" :buttonVariant="'Gray'" :loading="false"
                            :isDisabled="!isEmailValid" @click="handleSubmit" />

                        <AppSocial />
                        <AppText text="Terms & Conditions" :isLink="true" link="/" class="mt-2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useUserStore } from '@/stores/userStore';
import AppButton from '../atoms/AppButton.vue';
import AppTextInput from '../atoms/AppTextInput.vue';
import AppSocial from '../molecules/AppSocial.vue';
import AppWelcome from '../molecules/AppWelcome.vue';
import AppText from '../atoms/AppText.vue';

export default {
    components: {
        AppButton,
        AppTextInput,
        AppSocial,
        AppWelcome,
        AppText
    },

    setup(props, { emit }) {
        const userStore = useUserStore();

        // Email validation rules
        const emailRules = [
            (v) => !!v || 'Email is required',
            (v) => /.+@.+\..+/.test(v) || 'Invalid email address'
        ];

        // Track if the email is valid
        const isEmailValid = ref(false);

        // Watch for changes in the email and validate it
        watch(
            () => userStore.currentUser.email,
            (newEmail) => {
                // Check if the new email is valid
                isEmailValid.value = emailRules.every((rule) => rule(newEmail) === true);
            },
            { immediate: true } // Validate immediately on page load
        );

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
            isEmailValid,
            handleSubmit,
            emailRules
        };
    }
};
</script>