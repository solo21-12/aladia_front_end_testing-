<template>
    <div class="relative" id="top">
        <AppNavBar :isSignUpVisible="isSignUpVisible" @toggle-signup="openDialog" id="nav" />

        <v-dialog v-model="dialog" max-width="500" @update:modelValue="handleDialogChange">
            <AppLogin />
        </v-dialog>

        <main :class="{ 'blur': isSignUpVisible }" class="container mx-auto mt-5 transition-all duration-300" id="main">
            <slot />
        </main>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import AppLogin from '../components/organisms/AppLogin.vue';
import AppNavBar from '../components/organisms/AppNavBar.vue';

export default {
    components: {
        AppNavBar,
        AppLogin
    },
    data() {
        return {
            isSignUpVisible: false
        };
    },
    setup() {
        const dialog = ref(false);

        const handleDialogChange = (newVal) => {
            if (!newVal) {
                dialog.value = false;
            }
        };

        return {
            dialog,
            handleDialogChange
        };
    },
    methods: {
        openDialog() {
            this.dialog = true;
            this.isSignUpVisible = true;
        },
        closeSignUp() {
            this.dialog = false;
            this.isSignUpVisible = false;
        }
    },
    watch: {
        dialog(val) {
            this.isSignUpVisible = val;
        }
    }
};
</script>

<style scoped>
.blur {
    filter: blur(4px);
}
</style>