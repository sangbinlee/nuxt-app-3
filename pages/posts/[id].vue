<template>
    <section>
        <p style="background-color: green;">This page will be displayed at the /posts/:id route.</p>
        <p style="background-color: green;"> id : {{ $route.params.id }}</p>
    </section>
</template>
<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>