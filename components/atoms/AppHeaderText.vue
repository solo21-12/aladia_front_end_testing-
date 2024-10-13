<template>
    <div class="mb-2 text-base font-semibold text-white">
        {{ header }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderText',
    props: {
        header: {
            type: String as () => string,
            required: true,
        },
    },
});
</script>