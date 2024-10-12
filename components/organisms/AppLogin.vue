<template>
    <div id="login"
        class="relative inset-0 z-[90] flex h-full w-full items-center justify-center text-white backdrop-blur transition-opacity duration-300">
        <div id="login_wrapper"
            class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 transition-all duration-300">

            <div class="pointer-events-none absolute inset-0 opacity-70">
                <div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div>
                <div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div>
                <div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div>
                <div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div>
            </div>


            <component :is="currentPage" @go-to-more-details="showMoreDetails" @go-back="showSignUp"
                @go-to-code-accepter="acceptCode" @showMessage="showMessage" @go-to-sign-in="showSignIn" />
        </div>
    </div>
</template>

<script>
import AppMoreInfo from "../organisms/AppMoreInfo.vue";
import AppCodeAccepter from "../organisms/AppCodeAccepter.vue";
import AppSignUp from "../organisms/AppSignUp.vue";
import AppMessage from "../organisms/AppMessage.vue";
import AppSignIn from "../organisms/AppSignIn.vue";

export default {
    components: {
        AppSignUp,
        AppMoreInfo,
        AppCodeAccepter,
        AppMessage,
        AppSignIn
    },
    data() {
        return {
            currentPage: 'AppSignUp' // Start on the Sign Up page
        };
    },
    methods: {
        showMoreDetails() {
            this.currentPage = 'AppMoreInfo'; // Navigate to more info
        },
        showSignUp() {
            this.currentPage = 'AppSignUp'; // Return to sign up
        },
        acceptCode() {
            this.currentPage = 'AppCodeAccepter'; // Proceed to code acceptance
        },
        showMessage() {
            this.currentPage = 'AppMessage'; // Show a message
        },
        showSignIn() {
            this.currentPage = 'AppSignIn'; // Navigate to sign in
        }
    }
}
</script>
