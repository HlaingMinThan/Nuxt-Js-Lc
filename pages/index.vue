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
//client side fetching (not generate html from server - no ssr)
// let users = ref([]);
// onMounted( () => {
    // fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => {
    //     users.value = data;
    // })
// })

//client side ssr fetching
const { data, error } = await useAsyncData('users', () => $fetch('https://jsonplaceholder.typicode.com/users'));
let users = data.value;

definePageMeta({
  layout: "custom",
});
</script>