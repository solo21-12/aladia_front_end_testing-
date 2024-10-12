<template>
    <div class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
        @click="handleClick">
        <img :src="icon" :alt="altText" class="h-6" />
        <div class="w-40 text-sm">{{ buttonText }}</div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            default: 'Click Me'
        },
        altText: {
            type: String,
            default: 'Social Button Icon'
        },
        onClick: {
            type: Function,
            default: () => { }
        }
    },
    methods: {
        handleClick() {
            this.onClick();
        }
    }
};
</script>
