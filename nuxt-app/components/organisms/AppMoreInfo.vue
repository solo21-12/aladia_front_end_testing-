<template>
    <div id="more_info"
        class="text-sm relative bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black/40 backdrop-blur py-1">
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
                                :class="['flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all bg-white  ', isChecked ? 'border-white' : 'border-white/50']">
                                <i v-if="isChecked" class="fa-solid fa-check text-sm text-black"></i>
                            </div>
                            <div class="text-xs text-white/70">
                                I accept
                                <NuxtLink to="/" class="underline text-white"> Terms & Conditions </NuxtLink>
                                and
                                <NuxtLink to="/" class="underline text-white"> Privacy Policy </NuxtLink>
                            </div>
                        </div>

                        <div class="mb-4 text-center text-xs">Enter your details</div>

                        <AppTextInput placeholder="Name" iconClass="fa-solid fa-user"
                            v-model="userStore.currentUser.name" data-testid="name-input" />
                        <AppTextInput placeholder="Surname" iconClass="fa-solid fa-user"
                            v-model="userStore.currentUser.surname" data-testid="surname-input" />
                        <AppTextInput placeholder="Email" iconClass="fa-solid fa-envelope"
                            v-model="userStore.currentUser.email" data-testid="email-input" />
                        <AppTextInput placeholder="Password" type="password" iconClass="fa-solid fa-key"
                            v-model="userStore.currentUser.password" data-testid="password-input" />
                        <AppTextInput placeholder="Confirm Password" type="password" iconClass="fa-solid fa-key"
                            v-model="userStore.currentUser.confirmPassword" data-testid="confirm-password-input" />

                        <p v-if="showError" class="text-red-500 mb-2">Please fill all fields and accept the terms.</p>

                        <AppSubmitButton :isDisabled="!isFormValid" @click="handleSubmit" />

                        <NuxtLink to="/" class="cursor-pointer text-center text-white/40 text-sm">
                            Terms & Conditions
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useUserStore } from '@/stores/userStore';
import AppBackButton from '../atoms/AppBackButton.vue';
import AppTextInput from '../atoms/AppTextInput.vue';
import AppFileUploader from '../atoms/AppFileUploader.vue';
import AppSubmitButton from '../atoms/AppSubmitButton.vue';

export default {
    components: {
        AppBackButton,
        AppTextInput,
        AppFileUploader,
        AppSubmitButton
    },

    setup(props, { emit }) {
        const userStore = useUserStore();
        const isChecked = ref(false);
        const showError = ref(false);

        const isFormValid = computed(() => {
            return userStore.currentUser.name && userStore.currentUser.surname &&
                userStore.currentUser.email && userStore.currentUser.password &&
                userStore.currentUser.confirmPassword && isChecked.value;
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
            isFormValid
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
