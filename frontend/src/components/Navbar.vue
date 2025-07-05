<template>
<header class="bg-gray-900 shadow-md sticky top-0 z-50 animate-fade-in">
<nav class="container mx-auto px-6 py-4 flex justify-between items-center">
<div class="text-2xl font-bold text-white">ARYA KUSUMA</div>
<ul class="flex space-x-6">
<li><a href="#profil" class="text-gray-300 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300">
  <i class="fas fa-user mr-1 text-blue-400"></i>Profil</a></li>
<li><a href="#pendidikan" class="text-gray-300 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300">
  <i class="fas fa-graduation-cap mr-1 text-green-400"></i>Pendidikan</a></li>
<li><a href="#skill" class="text-gray-300 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300">
  <i class="fas fa-code mr-1 text-yellow-400"></i>Skill</a></li>
<li><a href="#proyek" class="text-gray-300 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300">
  <i class="fas fa-project-diagram mr-1 text-purple-400"></i>Proyek</a></li>
<li><a href="#kontak" class="text-gray-300 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300">
  <i class="fas fa-envelope mr-1 text-red-400"></i>Kontak</a></li>
</ul>
</nav>
</header>
</template>

<script setup>
// Definisikan nama komponen untuk menghindari warning
defineOptions({
  name: 'NavbarComponent'
});
</script>
