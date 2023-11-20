<script>
export default {
    name: "TitleComponent",
    props: {
        text: {
            type: String,
            default: "ESTRUCTURA ORGÁNICA",
        },
        text1: {
            type: String,
            default: "Inicio / ESTRUCTURA ORGÁNICA",
        },
    },
};
</script>

<template>
    <div class="bg-[#009999] text-white flex flex-col justify-center items-start h-24 px-10">
        <h1 class="text-4xl font-bold">{{ text }}</h1>
        <p class="text-sm">{{ text1 }}</p>
    </div>
</template>