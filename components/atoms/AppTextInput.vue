<template>
    <div :class="['group bg-white relative mb-6 flex h-10 w-full rounded transition-all', isTyping ? ' opacity-80' : ' opacity-100']"
        id="text_input">
        <div class="flex w-10 items-center justify-center text-base text-black/70">
            <i :class="iconClass"></i>
        </div>
        <input :type="inputType" :maxlength="maxlength" :placeholder="placeholder" :disabled="disabled"
            class="input-field h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
            autocomplete="off" @focus="isTyping = true" @blur="isTyping = false" v-model="inputValue" />

        <div v-if="type === 'password'"
            class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-black/50 transition-all active:scale-90"
            @click="togglePasswordVisibility">
            <i :class="passwordToggleIcon"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: "text",
        },
        maxlength: {
            type: Number,
            default: 100,
        },
        placeholder: {
            type: String,
            default: "",
        },
        iconClass: {
            type: String,
            default: "fa-solid fa-user",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showPassword: false,
            isTyping: false, // State to track if user is typing
            inputValue: this.modelValue // Local input value
        };
    },
    watch: {
        inputValue(value) {
            this.$emit('update:modelValue', value); // Emit update when input changes
        },
    },
    computed: {
        inputType() {
            return this.type === 'password' && !this.showPassword ? 'password' : 'text';
        },
        passwordToggleIcon() {
            return this.showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
        },
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
    },
};
</script>
