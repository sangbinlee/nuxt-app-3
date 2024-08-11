<script setup lang="ts">
const foo = useFoo()
const ver = useVer()
</script>

<template>
    <div style="border: 1px solid black;background-color: purple;">
        <div>
            [footer.vue] {{ foo }} {{ ver }}
        </div>
    </div>
</template>