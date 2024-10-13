<template>
    <div
        class="relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6">
        <div class="gradient absolute inset-0 opacity-[0.15]"></div>
        <div class="relative flex w-full justify-between transition-all duration-300 opacity-100">
            <img :src="imageUrl" alt="Aladia Logo" class="h-20 w-20 object-cover" />
            <div>
                <AppHeaderText :header="headerText" />
                <AppText :text="smallText" />
            </div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0">
            <i class="fa-solid fa-spinner animate-spin text-xs"></i>
        </div>
    </div>
</template>

<script lang="ts">
import AppHeaderText from '../atoms/AppHeaderText.vue';
import AppText from '../atoms/AppText.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Welcome Message',
    components: {
        AppHeaderText,
        AppText,
    },
    props: {
        headerText: {
            type: String as () => string,
            default: 'Welcome to Aladia,',
        },
        smallText: {
            type: String as () => string,
            default: 'Create or access your account from here',
        },
        imageUrl: {
            type: String as () => string,
            default: 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png',
        },
    },
});
</script>
