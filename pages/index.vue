<template>
    <Title>Welcome Home</Title>
    <!-- Lazy Loading component -->
    <LazyFooBarBaz/> 
    <h1>Hello</h1>
</template>

<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom",
});
</script>