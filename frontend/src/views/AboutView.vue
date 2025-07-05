<template>
  <div>
    <Navbar />
    <div class="container mx-auto px-6 py-20">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">About Me</h1>
      <div class="prose max-w-none">
        <p class="text-lg text-gray-600 mb-6">
          This is the about page. You can add more information about yourself here.
        </p>
        <p class="text-lg text-gray-600">
          Feel free to customize this page with your personal information, skills, and experience.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
