// stores/userStore.js
import { defineStore } from "pinia";
import { computed } from "vue";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: Array<{
      email: string;
      name: string;
      surname: string;
      password: string;
      confirmPassword: string;
    }>(),
    currentUser: {
      email: "",
      name: "",
      surname: "",
      password: "",
      confirmPassword: "",
    } as {
      email: string;
      name: string;
      surname: string;
      password: string;
      confirmPassword: string;
    },
    existingUser: false,
  }),

  getters: {
    // Computed property to check if the current email is empty
    isEmailEmpty: (state) => state.currentUser.email.trim() === "",
  },

  actions: {
    // Check if the email exists in the users array
    checkEmailInDatabase() {
      const foundUser = this.users.find(
        (user) => user.email === this.currentUser.email
      );

      this.existingUser = !!foundUser; // Set existingUser to true if a user is found

      if (foundUser) {
        Object.assign(this.currentUser, foundUser); // Copy found user's data into currentUser
      }
    },

    // Register the current user in the users array
    registerUser() {
      this.users.push({ ...this.currentUser }); // Add a new user based on current state
    },

    // Clear the currentUser state (optional)
  },
});
