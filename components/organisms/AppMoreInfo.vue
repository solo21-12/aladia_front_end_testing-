<template>
    <div id="more_info"
        class="text-sm relative bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black/40 backdrop-blur">
        <div
            class="relative -mt-20 flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 backdrop-blur transition-all duration-300">
            <div class="relative z-10 h-full p-5 text-13">
                <div>
                    <AppBackButton @onClick="handleBackClick" />
                    <div class="flex flex-col items-center px-4">
                        <div class="mb-4 flex w-full items-end gap-6 px-4">
                            <AppFileUploader @file-uploaded="handleFileUpload"
                                defaultImage="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" />
                            <div>
                                <div class="mb-1 text-sm font-semibold">Nice to meet you,</div>
                                <div class="text-xs text-white/70">
                                    Upload a profile picture <br />
                                    and complete your <br />
                                    presentation
                                </div>
                            </div>
                        </div>

                        <div class="mb-4 flex items-center gap-2">
                            <div @click="toggleCheckbox"
                                :class="['flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all  bg-white', isChecked ? 'border-white bg-white' : 'border-red-500']">
                                <i v-if="isChecked" class="fa-solid fa-check text-sm text-black"></i>
                            </div>
                            <div class="text-xs text-white/70">
                                I accept
                                <a href="/" class="underline text-white"> Terms & Conditions </a>
                                and
                                <a href="/" class="underline text-white"> Privacy Policy </a>
                            </div>
                        </div>

                        <div class="mb-4 text-center text-xs">Enter your details</div>

                        <AppTextInput class=" mb-6" placeholder="Name" iconClass="fa-solid fa-user"
                            v-model="userStore.currentUser.name" :rules="nameRules" data-testid="name-input" />
                        <AppTextInput class=" mb-6" placeholder="Surname" iconClass="fa-solid fa-user"
                            v-model="userStore.currentUser.surname" :rules="surnameRules" data-testid="surname-input" />
                        <AppTextInput class=" mb-6" placeholder="Email" iconClass="fa-solid fa-envelope"
                            v-model="userStore.currentUser.email" required data-testid="email-input" />
                        <AppTextInput class=" mb-6" placeholder="Password" type="password" iconClass="fa-solid fa-key"
                            v-model="userStore.currentUser.password" :rules="passwordRules"
                            data-testid="password-input" />
                        <AppTextInput class=" mb-6" placeholder="Confirm Password" type="password"
                            iconClass="fa-solid fa-key" v-model="userStore.currentUser.confirmPassword"
                            :rules="confirmPasswordRules" data-testid="confirm-password-input" />


                        <AppButton :buttonText="'Enter'" :buttonVariant="'Gray'" :loading="false"
                            :isDisabled="!isFormValid" @click="handleSubmit" />

                        <AppText text="Terms & Conditions" :isLink="true" link="/" class="mt-2" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useUserStore } from '@/stores/userStore';
import AppBackButton from '../atoms/AppBackButton.vue';
import AppTextInput from '../atoms/AppTextInput.vue';
import AppFileUploader from '../atoms/AppFileUploader.vue';
import AppButton from '../atoms/AppButton.vue';
import AppText from '../atoms/AppText.vue';

export default {
    components: {
        AppBackButton,
        AppTextInput,
        AppFileUploader,
        AppButton,
        AppText
    },

    setup(props, { emit }) {
        const userStore = useUserStore();
        const isChecked = ref(false);
        const showError = ref(false);
        const passwordFeedback = ref([]);

        const nameRules = [(v) => (v && v.length >= 2) || 'Name must have at least 2 characters'];
        const surnameRules = [(v) => (v && v.length >= 2) || 'Surname must have at least 2 characters'];

        const passwordRules = [
            (v) => (v && v.length >= 8) || 'Password must be at least 8 characters',
            (v) => /[A-Z]/.test(v) || 'Password must contain at least one uppercase letter',
            (v) => /\d/.test(v) || 'Password must contain at least one number',
            (v) => /[!@#$%^&*(),.?":{}|<>]/.test(v) || 'Password must contain at least one symbol'
        ];

        const confirmPasswordRules = [
            (v) => v === userStore.currentUser.password || 'Passwords must match'
        ];

        // Watch the password to give feedback while typing
        watch(() => userStore.currentUser.password, (newPassword) => {
            passwordFeedback.value = [
                { message: 'At least 8 characters', valid: newPassword.length >= 8 },
                { message: 'Contains uppercase letter', valid: /[A-Z]/.test(newPassword) },
                { message: 'Contains number', valid: /\d/.test(newPassword) },
                { message: 'Contains symbol', valid: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword) }
            ];
        });

        const isFormValid = computed(() => {
            return (
                userStore.currentUser.name.length >= 2 &&
                userStore.currentUser.surname.length >= 2 &&
                userStore.currentUser.email &&
                userStore.currentUser.password &&
                userStore.currentUser.confirmPassword === userStore.currentUser.password &&
                isChecked.value
            );
        });

        const handleSubmit = () => {
            if (isFormValid.value) {
                userStore.registerUser();
                emit('go-to-code-accepter');
            } else {
                showError.value = true;
            }
        };

        const handleBackClick = () => {
            emit('go-back');
        };

        return {
            userStore,
            handleSubmit,
            handleBackClick,
            isChecked,
            showError,
            isFormValid,
            passwordFeedback,
            nameRules,
            surnameRules,
            passwordRules,
            confirmPasswordRules
        };
    },
    methods: {
        handleFileUpload(file) {
            console.log('Uploaded file:', file);
        },
        toggleCheckbox() {
            this.isChecked = !this.isChecked;
        }
    }
};
</script>
