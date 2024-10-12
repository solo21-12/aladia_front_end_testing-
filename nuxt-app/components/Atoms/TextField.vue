<template>
  <div
    :class="[
      disabled
        ? 'group relative mb-6 flex h-10 w-full rounded bg-[#A8A8A8]'
        : 'group relative mb-6 flex h-10 w-full rounded transition-all bg-white',
    ]"
  >
    <div class="flex w-10 items-center justify-center text-xl">
      <i :class="icon"></i>
    </div>
    <input
      v-model="internalValue"
      :placeholder="placeholder"
      :disabled="disabled"
      maxlength="100"
      class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
      autocomplete="off"
      :type="type"
      @input="$emit('update:modelValue', internalValue)"
    />
    <i
      v-if="type === 'password'"
      class="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye-slash"
    ></i>
  </div>
</template>

<script>
export default {
  // flex w-10 items-center justify-center text-xl
  name: "TextField",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      internalValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.internalValue = newValue;
    },
  },
};
</script>
