<script setup lang="ts">
const foo = useFoo()
const ver = useVer()
</script>

<template>
    <!-- <div style="border: 1px solid black;">
        <div>
            [header.vue] {{ foo }}
        </div>
        <div>
            [header.vue] {{ ver }}
        </div>
    </div> -->
    <header style="background-color: orange;">
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/about">[header.vue] About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/posts/1">[header.vue] Post 1</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/posts/2">[header.vue] Post 2</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login">[header.vue] login</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>