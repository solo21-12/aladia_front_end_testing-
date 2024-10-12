<template>
    <div class="relative group  h-24 w-24 rounded  transition-alli">
        <div class="gradient absolute inset-0 opacity-20 group-hover:border group-hover:border-white ">
        </div>
        <img v-if="selectedImage" :src="selectedImage" class="h-20 w-20 object-cover" alt="Profile Preview" />
        <img v-else :src="defaultImage" class="h-20 w-20 object-cover" alt="Default Profile" />
        <input type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer"
            @change="handleFileUpload" />
    </div>
</template>

<script>
export default {
    props: {
        defaultImage: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            selectedImage: null,
        };
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.selectedImage = URL.createObjectURL(file);
                this.$emit('file-uploaded', file);
            }
        },
    },
};
</script>
