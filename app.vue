<script setup lang="ts">
import { useWebsiteStore } from './stores/website';
const { data: count } = await useFetch('/api/count')


const foo = useFoo()
const ver = useVer()


const counter = useState('counter', () => Math.round(Math.random() * 1000))




const website = useWebsiteStore()
await callOnce(website.fetch)
</script>

<template>
  <div style="border: 1px solid red;">
    <div style="background-color: red;">
      <p>Page visits: {{ count }}</p>
      <div>
        [app.vue] {{ foo }} {{ ver }}
      </div>
      <div>
        Counter: {{ counter }}
        <button @click="counter++">
          +
        </button>
        <button @click="counter--">
          -
        </button>
      </div>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div style="background-color: red;">
      <div>
        [app.vue] {{ foo }} {{ ver }}
      </div>
    </div>
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>
  </div>
</template>
