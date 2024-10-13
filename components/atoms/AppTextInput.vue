<template>
    <div :class="['group bg-white relative mb-6 flex h-10 w-full rounded transition-all', isTyping ? ' opacity-80' : ' opacity-100']"
        id="text_input">
        <div class="flex w-10 items-center justify-center text-base text-black/70">
            <i :class="iconClass"></i>
        </div>

        <!-- Input field with validation -->
        <input :type="inputType" :maxlength="maxlength" :placeholder="placeholder" :disabled="disabled"
            class="input-field h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
            autocomplete="off" @focus="isTyping = true" @blur="validateInput" v-model="inputValue" />

        <!-- Password visibility toggle for password inputs -->
        <div v-if="type === 'password'"
            class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-black/50 transition-all active:scale-90"
            @click="togglePasswordVisibility">
            <i :class="passwordToggleIcon"></i>
        </div>

        <!-- Display validation error message -->
        <p v-if="error" id="error_msg" class="text-red-500 text-xs mt-1 absolute left-0  -bottom-[20px]">{{ error }}</p>
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
        rules: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            showPassword: false,
            isTyping: false, // State to track if user is typing
            inputValue: this.modelValue, // Local input value
            error: '', // Error message for validation
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
        validateInput() {
            this.error = ''; // Clear previous error
            for (let rule of this.rules) {
                const validationResult = rule(this.inputValue);
                if (validationResult !== true) {
                    this.error = validationResult; // If a rule fails, set the error message
                    return;
                }
            }
            // If all rules pass, emit an event indicating the input is valid
            this.$emit('input-valid', this.inputValue);
        },
    },
};
</script>
