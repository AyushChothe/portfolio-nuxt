<script setup>
import { GithubOutlined, GoogleOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons-vue';
</script>

<template>
    <a-card bordered hoverable title="Me">
        <div class="flex flex-row items-center">
            <a-avatar src="/profile.jpg" alt="Ayush Chothe Profile" style="height: auto; width: 100px;" />
            <div class="pl-5">
                <h1 class="text-2xl">
                    <b>Ayush Chothe</b>
                </h1>
                <h3 style="color:#aaa;margin: 0px">I'm a Developer</h3>
            </div>
        </div>
        <template #actions>
            <div>
                <a-tooltip title="Play Store">
                    <a href="https://play.google.com/store/apps/dev?id=6346398198510031820" target="_blank">
                        <GoogleOutlined />
                    </a>
                </a-tooltip>
            </div>
            <div>
                <a-tooltip title="GitHub">
                    <a href="https://www.github.com/AyushChothe" target="_blank">
                        <GithubOutlined />
                    </a>
                </a-tooltip>
            </div>
            <div>
                <a-tooltip title="LinkedIn">
                    <a href="https://www.linkedin.com/in/ayush-chothe-265696163" target="_blank">
                        <LinkedinOutlined />
                    </a>
                </a-tooltip>
            </div>
            <div>
                <a-tooltip title="Instagram">
                    <a href="https://www.instagram.com/ayushchothe" target="_blank">
                        <InstagramOutlined />
                    </a>
                </a-tooltip>
            </div>
            <div>
                <a-tooltip title="Twitter">
                    <a href="https://twitter.com/AyushMChothe" target="_blank">
                        <TwitterOutlined />
                    </a>
                </a-tooltip>
            </div>

        </template>
    </a-card>
</template>
