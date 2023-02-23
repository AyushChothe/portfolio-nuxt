<script setup>
const { data, pending, error, refresh } = await useFetch("/api/get_langs")
let langs = JSON.parse(data.value).data;
</script>

<template>
    <div class="flex flex-wrap justify-start">
        <div v-for="lang in langs" class="p-2 mr-2 mb-2 rounded-md bg-gray-300 flex flex-col space-y-1">
            <div class="flex items-center justify-center space-x-2">
                <div class="bg-gray-200 w-5 h-5 rounded-full">
                </div>
                <div>{{ lang.name }}</div>
            </div>
            <div class="bg-gray-200 w-full h-1">
                <div class="bg-yellow-400 w-1/2 h-1 relative"></div>
            </div>
        </div>
    </div>
</template>