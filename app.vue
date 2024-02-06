<script setup>
const { data: posts } = await useFetch("/api/posts");
</script>
<template>
  <section class="bg-gray-50 h-screen p-4">
    <h1 class="text-center text-md text-2xl">Posts from database:</h1>

    <div class="container mx-auto py-8">
      <a
        v-for="post in posts"
        :key="post.id"
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ post.title }}
        </h5>
        <p class="font-normal text-gray-700">{{ post.description }}</p>
      </a>
    </div>
  </section>
</template>
