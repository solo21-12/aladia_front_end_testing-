<template>
    <button @click="toggleSignUp" id="join-us-button" type="submit"
        class="group relative shrink-0 scale-100 cursor-pointer items-center justify-center overflow-hidden rounded border px-3 py-2 text-sm leading-none transition-all hover:border-transparent active:scale-95 hover:gradient_gold">
        <div class="absolute inset-0 z-0 flex h-full w-full items-center justify-center">
            <div
                class="gradient h-0 w-0 rounded-full transition-all duration-200 group-hover:h-full group-hover:w-full group-hover:rounded">
            </div>
        </div>
        <div class="relative z-10 flex items-center justify-center gap-2 group-hover:text-black">
            <i class="fa-solid fa-user-plus"></i> Join Us
        </div>
    </button>
</template>

<script>
export default {
    name: 'JoinUsButton',
    methods: {
        toggleSignUp() {
            this.$emit('toggle-signup');
        }
    }
};
</script>

<style scoped></style>
