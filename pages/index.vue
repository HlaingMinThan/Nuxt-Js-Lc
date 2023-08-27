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
    
    <!-- <div>
        <h1>User name = {{user.name }} user id - {{user.id}}</h1>
    </div> -->

    <div>
        weather - {{weather.main.temp}} C
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

// ssr fetching
// const { data, error } = await useAsyncData('users', () => $fetch('https://jsonplaceholder.typicode.com/users'));
// let users = data.value;

// ssr fetching shorten way (automatic unique key generate)
// const { data, error } = await useFetch('https://jsonplaceholder.typicode.com/users');
// let users = data.value;

// ssr fetching with pick the value we need
// const {data : user ,error} = await useFetch('https://jsonplaceholder.typicode.com/users/1', {pick : ['name','id']})

//fetch weather api with api key on client side
const {data : weather ,error} = await useFetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae5cdab93304b73f64062c05d8065b44')
definePageMeta({
  layout: "custom",
});
</script>