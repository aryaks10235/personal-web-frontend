<script setup>
import SectionTitle from './SectionTitle.vue';

// Definisikan nama komponen untuk menghindari warning
defineOptions({
  name: 'ContactSection'
});
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>
      <a href="mailto:emailanda@example.com"
         class="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300 inline-block mb-12">
        <i class="fas fa-envelope mr-2 text-red-400"></i>
        Kirim Email
      </a>
      <div class="flex justify-center space-x-6 mb-8">
        <a href="#" target="_blank" class="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-2xl">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" target="_blank" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" target="_blank" class="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-2xl">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" class="text-gray-400 hover:text-sky-400 transition-colors duration-300 text-2xl">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <p class="text-gray-500">&copy; {{ new Date().getFullYear() }} Arya Kusuma. Dibuat dengan Vue.js</p>
    </div>
  </footer>
</template>
