<template>
    <div>
        <span v-if="!isLink" class="text-white/70">{{ text }}</span>
        <a v-else :href="link" class="text-white/70 hover:text-white hover:underline">
            {{ text }}
        </a>
    </div>
</template>

<script lang="ts">
import NuxtLink from 'nuxt-link';

export default {
    name: 'SmallText',
    props: {
        text: {
            type: String,
            required: true,
        },
        isLink: {
            type: Boolean,
            default: false,
        },
        link: {
            type: String,
            default: '#',
        },
    },
};
</script>