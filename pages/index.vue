<script setup lang="ts">
import { useWebsiteStore } from '~/stores/website';

definePageMeta({
    title: 'My home page',
    // middleware: 'auth'
})
const website = useWebsiteStore()

await callOnce(website.fetch)
</script>
<template>
    <div style="border: 1px solid blue;">
        <h1>333 Welcome to the homepage</h1>
        <AppAlert>
            This is an auto-imported component
        </AppAlert>
    </div>
</template>
