<script setup>
import { StarFilled } from '@ant-design/icons-vue';
const { data, pending, error, refresh } = await useFetch("/api/get_langs")
let langs = JSON.parse(data.value).data.sort((a, b) => b.isFav - a.isFav);
</script>

<template>
    <a-card bordered hoverable title="Languages">
        <a-card-grid :key="i" v-for="lang, i in langs">
            <div class="flex items-center justify-start space-x-2">
                <a-avatar></a-avatar>
                <div>{{ lang.name }}</div>
                <StarFilled v-if="lang.isFav" />
            </div>
            <div class="bg-gray-200 w-full h-1 mt-2">
                <div class="bg-yellow-400 h-1 relative" :class="`w-${lang.level}/5`"></div>
            </div>
        </a-card-grid>
    </a-card>
</template>