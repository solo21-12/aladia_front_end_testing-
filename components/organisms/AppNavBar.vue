<template>
    <div class=" fixed left-0 right-0 top-0 z-[60] flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2"
        :class="{ 'blur': isSignUpVisible }">
        <NuxtLink to="/" class="flex items-center gap-4 md:pl-20">
            <div class="flex h-8 w-8 items-center justify-center">
                <i class="fa-solid fa-house"></i>
            </div>
        </NuxtLink>
        <div class="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center">
            <AppSearchInput />
        </div>
        <div id="nav_wrapper">
            <AppJoinUsButton @toggle-signup="toggleSignUp" data-id="join_us" />
        </div>
    </div>
</template>

<script>

import AppJoinUsButton from '../atoms/AppJoinUsButton.vue';
import AppSearchInput from '../atoms/AppSearchInput.vue';

export default {
    name: 'MainHeader',
    components: {
        AppSearchInput,
        AppJoinUsButton
    },
    props: {
        isSignUpVisible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleSignUp() {
            this.$emit('toggle-signup');
        }
    }
};
</script>

<style scoped>
.blur {
    filter: blur(5px);
}
</style>
