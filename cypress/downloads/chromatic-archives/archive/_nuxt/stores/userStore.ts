import { defineStore } from "/_nuxt/node_modules/.cache/vite/client/deps/pinia.js?v=45b1bb1f";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: Array(),
    currentUser: {
      email: "",
      name: "",
      surname: "",
      password: "",
      confirmPassword: ""
    },
    existingUser: false
  }),
  getters: {
    // Computed property to check if the current email is empty
    isEmailEmpty: (state) => state.currentUser.email.trim() === ""
  },
  actions: {
    // Check if the email exists in the users array
    checkEmailInDatabase() {
      const foundUser = this.users.find(
        (user) => user.email === this.currentUser.email
      );
      this.existingUser = !!foundUser;
      if (foundUser) {
        Object.assign(this.currentUser, foundUser);
      }
    },
    // Register the current user in the users array
    registerUser() {
      this.users.push({ ...this.currentUser });
    }
    // Clear the currentUser state (optional)
  }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdG9yZXMvdXNlclN0b3JlLmpzXG5pbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tIFwidnVlXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyU3RvcmUgPSBkZWZpbmVTdG9yZShcInVzZXJTdG9yZVwiLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIHVzZXJzOiBBcnJheTx7XG4gICAgICBlbWFpbDogc3RyaW5nO1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgc3VybmFtZTogc3RyaW5nO1xuICAgICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgIH0+KCksXG4gICAgY3VycmVudFVzZXI6IHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHN1cm5hbWU6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcbiAgICB9IGFzIHtcbiAgICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICBzdXJuYW1lOiBzdHJpbmc7XG4gICAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgfSxcbiAgICBleGlzdGluZ1VzZXI6IGZhbHNlLFxuICB9KSxcblxuICBnZXR0ZXJzOiB7XG4gICAgLy8gQ29tcHV0ZWQgcHJvcGVydHkgdG8gY2hlY2sgaWYgdGhlIGN1cnJlbnQgZW1haWwgaXMgZW1wdHlcbiAgICBpc0VtYWlsRW1wdHk6IChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFVzZXIuZW1haWwudHJpbSgpID09PSBcIlwiLFxuICB9LFxuXG4gIGFjdGlvbnM6IHtcbiAgICAvLyBDaGVjayBpZiB0aGUgZW1haWwgZXhpc3RzIGluIHRoZSB1c2VycyBhcnJheVxuICAgIGNoZWNrRW1haWxJbkRhdGFiYXNlKCkge1xuICAgICAgY29uc3QgZm91bmRVc2VyID0gdGhpcy51c2Vycy5maW5kKFxuICAgICAgICAodXNlcikgPT4gdXNlci5lbWFpbCA9PT0gdGhpcy5jdXJyZW50VXNlci5lbWFpbFxuICAgICAgKTtcblxuICAgICAgdGhpcy5leGlzdGluZ1VzZXIgPSAhIWZvdW5kVXNlcjsgLy8gU2V0IGV4aXN0aW5nVXNlciB0byB0cnVlIGlmIGEgdXNlciBpcyBmb3VuZFxuXG4gICAgICBpZiAoZm91bmRVc2VyKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jdXJyZW50VXNlciwgZm91bmRVc2VyKTsgLy8gQ29weSBmb3VuZCB1c2VyJ3MgZGF0YSBpbnRvIGN1cnJlbnRVc2VyXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBjdXJyZW50IHVzZXIgaW4gdGhlIHVzZXJzIGFycmF5XG4gICAgcmVnaXN0ZXJVc2VyKCkge1xuICAgICAgdGhpcy51c2Vycy5wdXNoKHsgLi4udGhpcy5jdXJyZW50VXNlciB9KTsgLy8gQWRkIGEgbmV3IHVzZXIgYmFzZWQgb24gY3VycmVudCBzdGF0ZVxuICAgIH0sXG5cbiAgICAvLyBDbGVhciB0aGUgY3VycmVudFVzZXIgc3RhdGUgKG9wdGlvbmFsKVxuICB9LFxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUNBLFNBQVMsbUJBQW1CO0FBR3JCLGFBQU0sZUFBZSxZQUFZLGFBQWE7QUFBQSxFQUNuRCxPQUFPLE9BQU87QUFBQSxJQUNaLE9BQU8sTUFNSjtBQUFBLElBQ0gsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsaUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxJQU9BLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsU0FBUztBQUFBO0FBQUEsSUFFUCxjQUFjLENBQUMsVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU07QUFBQSxFQUM5RDtBQUFBLEVBRUEsU0FBUztBQUFBO0FBQUEsSUFFUCx1QkFBdUI7QUFDckIsWUFBTSxZQUFZLEtBQUssTUFBTTtBQUFBLFFBQzNCLENBQUMsU0FBUyxLQUFLLFVBQVUsS0FBSyxZQUFZO0FBQUEsTUFDNUM7QUFFQSxXQUFLLGVBQWUsQ0FBQyxDQUFDO0FBRXRCLFVBQUksV0FBVztBQUNiLGVBQU8sT0FBTyxLQUFLLGFBQWEsU0FBUztBQUFBLE1BQzNDO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFHQSxlQUFlO0FBQ2IsV0FBSyxNQUFNLEtBQUssRUFBRSxHQUFHLEtBQUssWUFBWSxDQUFDO0FBQUEsSUFDekM7QUFBQTtBQUFBLEVBR0Y7QUFDRixDQUFDOyIsIm5hbWVzIjpbXX0=