<script lang="ts" setup>
import { AboutMe } from '@/server/api/get_about_me';
const { data } = await useFetch("/api/get_about_me")
let { name, age, dob, education, email, experience, location }: AboutMe = JSON.parse(data.value as string).data;
</script>
<template>
    <a-card title="About Me">
        <a-descriptions bordered :column="1">
            <a-descriptions-item label="Name">{{ name }}</a-descriptions-item>
            <a-descriptions-item label="Age">{{ age }}</a-descriptions-item>
            <a-descriptions-item label="Date Of Birth">{{ dob }}</a-descriptions-item>
            <a-descriptions-item label="Location">{{ location }}</a-descriptions-item>
            <a-descriptions-item label="Email">{{ email }}</a-descriptions-item>
            <a-descriptions-item label="Education">
                <a-list size="small" :data-source="education">
                    <template #renderItem="{ item, index }">
                        <a-list-item>{{ index + 1 }}. {{ item }}</a-list-item>
                    </template>
                </a-list>
            </a-descriptions-item>
            <a-descriptions-item label="Experience">
                <a-list size="small" :data-source="experience">
                    <template #renderItem="{ item, index }">
                        <a-list-item>{{ index + 1 }}. {{ item }}</a-list-item>
                    </template>
                </a-list>
            </a-descriptions-item>
        </a-descriptions>
    </a-card>
</template>