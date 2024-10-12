<template>
    <button type="submit" id="submit-button" :class="[
        'relative group flex h-10 w-full items-center justify-center overflow-hidden rounded-md border-white/0 bg-black text-center text-sm mb-2 transition-all duration-200 disabled:cursor-auto disabled:border-none',

    ]" :disabled="isDisabled || loading" @click="handleClick">
        <div
            class="gradient absolute inset-0 opacity-50 group-hover:border-2 group-disabled:border-none group-disabled:text-gray-400">
        </div>
        <div class="text-gray-400 group-hover:text-white" v-if="!loading">{{ buttonText }}</div>
        <div v-else class="loader"></div>
    </button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: 'Enter'
        },
        onClick: {
            type: Function,
            default: () => { console.log('Button clicked'); }
        },
        loading: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            if (!this.isDisabled && !this.loading) {
                this.onClick();
            }
        }
    }
};
</script>

<style scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
