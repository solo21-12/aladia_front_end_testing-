<template>
    <button @click="handleClick" :id="buttonVariant === 'Gold' ? 'join-us-button' : 'submit-button'"
        :disabled="isDisabled || loading" :class="[
            commonClasses,
            buttonVariant === 'Gold' ? goldClasses : grayClasses,
            { 'hover:gradient_gold': buttonVariant === 'Gold' },
            { 'cursor-not-allowed': loading } // Add class for cursor change
        ]" type="submit">

        <!-- Background Gradient Effect for Gold Button -->
        <div v-if="buttonVariant === 'Gold'"
            class="absolute inset-0 z-0 flex h-full w-full items-center justify-center">
            <div
                class="gradient h-0 w-0 rounded-full transition-all duration-200 group-hover:h-full group-hover:w-full group-hover:rounded">
            </div>
        </div>

        <!-- Gray Button's Gradient Effect -->
        <div v-else class="absolute inset-0 z-0 flex h-full w-full items-center justify-center">
            <div
                class="gradient absolute inset-0 opacity-50 group-hover:border-2 group-disabled:border-none group-disabled:text-gray-400">
            </div>
        </div>

        <!-- Button Text and Icon -->
        <div
            :class="[buttonVariant === 'Gold' ? 'relative z-10 flex items-center justify-center gap-2 group-hover:text-black' : 'text-gray-400 group-hover:text-white']">
            <i v-if="icon" :class="icon"></i>
            <span v-if="!loading">{{ buttonText }}</span>
            <div v-else class="loader"></div>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        buttonVariant: {
            type: String,
            default: 'Gold' // Options: 'Gold' or 'Gray'
        },
        buttonText: {
            type: String,
            required: true // Make buttonText required
        },
        loading: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: '' // Default is no icon
        }
    },
    methods: {
        handleClick() {
            if (!this.isDisabled && !this.loading) {
                this.$emit(this.buttonVariant === 'Gold' ? 'toggle-signup' : 'on-click');
            }
        }
    },
    computed: {
        commonClasses() {
            return 'group relative flex items-center justify-center overflow-hidden rounded px-3 py-2 text-sm leading-none transition-all disabled:cursor-auto disabled:border-none';
        },
        goldClasses() {
            return 'shrink-0 scale-100 cursor-pointer border hover:border-transparent active:scale-95';
        },
        grayClasses() {
            return 'h-10 w-full bg-black mb-2';
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

.cursor-not-allowed {
    cursor: not-allowed;
    background: transparent;
}
</style>
