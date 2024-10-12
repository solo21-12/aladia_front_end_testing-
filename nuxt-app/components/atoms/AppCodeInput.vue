<template>
    <input type="text" maxlength="1" class="h-full w-full text-center border-b text-2xl  bg-white" :value="code"
        @input="handleInput" />
</template>

<script>
export default {
    props: {
        code: String,
        index: Number
    },
    methods: {
        handleInput(event) {
            const value = event.target.value;
            if (/^\d$/.test(value)) {
                this.$emit('input', { value, index: this.index });
            } else {
                event.target.value = '';
            }
        },

    }
};
</script>

<style scoped>
input {
    border-color: white;
}
</style>