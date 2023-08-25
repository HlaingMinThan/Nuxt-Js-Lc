<template>
    <Title>Welcome Home</Title>
    <!-- Lazy Loading component -->
    <LazyFooBarBaz/> 
    <h1>Hello</h1>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">{{user.name}}</li>
        </ul>
    </div>
</template>

<script setup>
let users = ref([]);

//client side fetching (not generate html from server - no ssr)
onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => {
        users.value = data;
    })
})
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom",
});
</script>