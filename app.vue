<script setup lang="ts">
const foo = useFoo()
const ver = useVer()
</script>

<template>
  <div style="border: 1px solid red;">
    <div>
      [app.vue] {{ foo }}
    </div>
    <div>
      [app.vue] {{ ver }}
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
