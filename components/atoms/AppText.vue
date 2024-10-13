<template>
    <div>
        <span v-if="!isLink" class="text-white/70">{{ text }}</span>
        <NuxtLink v-else :to="link" class="text-white/70 hover:text-white hover:underline">
            {{ text }}
        </NuxtLink>
    </div>
</template>

<script lang="ts">

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