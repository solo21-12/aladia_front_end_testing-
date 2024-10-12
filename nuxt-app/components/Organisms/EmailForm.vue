<template>
  <div class="pt-8">
    <Header />
    <div class="mb-6 text-center">Enter your email</div>
    <div class="mb-6 flex flex-col items-center px-4">
      <TextField
        v-model="email"
        type="email"
        icon="fa-solid fa-envelope text-base text-black/70"
        placeholder="Email Address"
      />

      <Button @click="submitEmail" text="Enter" />
      <div class="w-full transition-all duration-300">
        <Separator />
        <SignInOptions />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Atoms/Button.vue";
import Separator from "../Atoms/Separator.vue";
import TextField from "../Atoms/TextField.vue";
import SignInOptions from "../Molecules/SignInOptions.vue";
import Header from "../Atoms/Header.vue";

export default {
  name: "EmailForm",
  components: {
    Header,
    Button,
    TextField,
    Separator,
    SignInOptions,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submitEmail() {
      if (this.email) {
        this.$emit("next", this.email);
      }
    },
  },
};
</script>
