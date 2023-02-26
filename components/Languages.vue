<script setup lang="ts">
import { Language } from "@/server/api/get_langs";
import { StarFilled } from '@ant-design/icons-vue';
const { data } = await useFetch("/api/get_langs")
let langs: [Language] = JSON.parse(data.value as string).data.sort((a: any, b: any) => b.level - a.level);
</script>

<template>
    <a-card bordered hoverable title="Languages">
        <a-card-grid :key="i" v-for="lang, i in langs" class="w-1/2 md:w-1/3 lg:w-1/4">
            <div class="flex items-center justify-start space-x-2">
                <a-avatar>{{ i + 1 }}</a-avatar>
                <div>{{ lang.name }}</div>
                <StarFilled v-if="lang.isFav" />
            </div>
            <a-progress :percent="((lang.level / 5) * 100)" status="active" :showInfo="false" />
        </a-card-grid>
    </a-card>
</template>