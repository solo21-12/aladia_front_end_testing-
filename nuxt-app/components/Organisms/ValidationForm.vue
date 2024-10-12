<template>
  <div class="flex flex-col items-center px-6 pt-8">
    <img
      src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
      class="mb-2 h-24 w-24 rounded object-cover"
    />
    <div class="mb-4 text-lg font-semibold">aa bb</div>
    <div class="mb-8 text-white/70">Thanks for joining Aladia.</div>
    <div class="mb-20 text-center text-white/70">
      Please enter below the 6-digit code we sent you through your registration
      e-mail:
    </div>
    <div
      class="relative mb-4 flex h-10 w-full justify-between text-xl text-black"
    >
      <NumberField />
      <NumberField />
      <NumberField />
      <NumberField />
      <NumberField />
      <NumberField />
    </div>
    <div class="mb-24 flex w-full justify-center">
      <div
        class="flex cursor-pointer items-center justify-center text-xs transition-all"
      >
        <div class="text-white/50">You didn't receive any mail?</div>
      </div>
    </div>
    <div
      class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm pointer-events-none opacity-70 mb-2"
    >
      <div class="bg-gradient absolute inset-0 opacity-50">Enter</div>
    </div>
  </div>
</template>

<script>
import NumberField from "../Atoms/NumberField.vue";

export default {
  name: "ValidationForm",
  components: { NumberField },
};
</script>
