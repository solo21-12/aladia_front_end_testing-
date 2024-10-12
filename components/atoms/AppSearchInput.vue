<template>
    <div id="search"
        class="w-3/5 sm:w-1/3 group/input pointer-events-auto relative h-full rounded-md pt-2 transition-all">
        <div class="relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm align-middle">
            <div class="group-hover/input:scale-110 shrink-0 cursor-pointer text-lg transition-all">
                <i class="fa-solid fa-magnifying-glass text-xs"></i>
            </div>
            <input value="" maxlength="100" role="presentation"
                class="h-full w-0 flex-1 bg-transparent text-13 outline-none" placeholder="Search courses...">
            <div class="relative z-20 shrink-0 cursor-pointer text-sm text-[#707070] hover:text-[#ffffff]">
                <i style="display:none;" class="fa-solid fa-circle-xmark"></i>
            </div>
            <div class="bg-gradient-top absolute bottom-0 left-0 right-0 h-[1px] w-full bg-white"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchInput',
};
</script>

<style scoped>
.bg-gradient-top {
    background: transparent linear-gradient(90deg, transparent, #fff 50%, transparent) 0 0 no-repeat padding-box;
}
</style>
