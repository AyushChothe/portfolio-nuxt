<script setup>
const { data } = await useFetch("/api/get_about_me")
let aboutMe = JSON.parse(data.value).data;
</script>

<template>
    <!-- <h1>{{ aboutMe }}</h1> -->
    <div class="flex flex-col space-y-4">
        <figure class="bg-gray-100 rounded-xl p-8 card">
            <img class="w-1/2 rounded-xl mx-auto" src="@/assets/profile.jpg" alt="Profile">
            <div class="pt-4 text-center space-y-4">
                <figcaption class="font-medium">
                    <div class="text-cyan-600 text-2xl">
                        {{ aboutMe.name }}
                    </div>
                    <div class="text-gray-400 text-lg">
                        Developer
                    </div>
                </figcaption>
            </div>
        </figure>
        <div class="bg-gray-100 rounded-xl">
            <table>
                <tr>
                    <td>Email</td>
                    <td>{{ aboutMe.email }}</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>{{ aboutMe.dob }}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{{ aboutMe.age }}</td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td>{{ aboutMe.location }}</td>
                </tr>
                <tr>
                    <td>Education</td>
                    <td>
                        <ol class="text-xs">
                            <li v-for="edu in aboutMe.education">
                                {{ edu }}
                            </li>
                        </ol>
                    </td>
                </tr>
                <tr>
                    <td>Experience</td>
                    <td>
                        <ol class="text-xs">
                            <li v-for="exp in aboutMe.experience">
                                {{ exp }}
                            </li>
                        </ol>
                    </td>
                </tr>
            </table>
        </div>
        <div class="bg-gray-100 rounded-xl p-4">
            <h1 class="text-semibold bg-pink-300 rounded-t-xl p-2">Languages</h1>
            <div class="rounded-b-xl p-4 bg-pink-500">
                Hello
            </div>
        </div>
    </div>
</template>
