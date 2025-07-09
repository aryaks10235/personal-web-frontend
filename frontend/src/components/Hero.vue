<template>
<section id="profil" class="max-w-5xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white md:gap-0">
<div class="md:w-1/2 mb-2 md:mb-0 md:pr-0">
<p class="text-lg text-gray-300 mb-2 animate-slide-in-left" style="animation-delay: 100ms;">
Hallo Saya
</p>
<h1 class="text-5xl font-bold text-white mb-4 animate-slide-in-left custom-font"
  style="animation-delay: 200ms;">
<span class="text-gray-300">ARYA KUSUMA</span>
</h1>
<div class="mb-4 animate-slide-in-left" style="animation-delay: 600ms;">
  <TypeWriter :texts="['Frontend Developer', 'UI/UX Designer']" :speed="120" :delay="1500" />
</div>
<p class="text-xl text-gray-300 mb-4 animate-slide-in-left"
style="animation-delay: 400ms;">
Selamat Datang di Website Personal saya.
</p>
</div>
<div class="md:w-1/2 flex justify-center animate-slide-in-right md:pl-0">
<!-- Profile Image Container with Advanced Animations -->
<div class="group relative profile-container">
  <!-- Rotating Border Ring -->
  <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow
              p-1 profile-ring"></div>

  <!-- Glow Effect Background -->
  <div class="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20
              opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl animate-pulse-glow"></div>

  <!-- Floating Particles Around Image -->
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    <div class="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-orbit-1"></div>
    <div class="absolute top-1/4 right-0 w-1.5 h-1.5 bg-purple-400 rounded-full animate-orbit-2"></div>
    <div class="absolute bottom-1/4 left-0 w-1 h-1 bg-pink-400 rounded-full animate-orbit-3"></div>
    <div class="absolute bottom-0 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-orbit-4"></div>
    <div class="absolute top-1/2 left-0 w-1 h-1 bg-yellow-400 rounded-full animate-orbit-5"></div>
    <div class="absolute top-0 right-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-orbit-6"></div>
  </div>

  <!-- Main Profile Image -->
  <img src="https://github.com/aryaks10235.png" alt="Foto Profil Arya Kusuma"
       class="relative z-10 w-100 h-100 rounded-full object-cover shadow-2xl cursor-pointer
              transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
              filter group-hover:brightness-110 group-hover:contrast-110
              border-4 border-transparent group-hover:border-white/20"
       @click="scrollToAbout">

  <!-- Ripple Effect on Click -->
  <div class="absolute inset-0 rounded-full border-4 border-white/30 opacity-0
              group-active:opacity-100 group-active:scale-150 transition-all duration-300 pointer-events-none"></div>

</div>
</div>
</section>

<!-- Section Tentang Saya - Muncul di bawah hero -->
<section id="tentang-saya" class="py-20 bg-gray-900 text-white">
  <div class="container mx-auto px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white mb-4">
          <i class="fas fa-user-circle text-blue-400 mr-3"></i>
          Tentang Saya
        </h2>
        <div class="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
      </div>

      <!-- Deskripsi Pribadi -->
      <div class="max-w-3xl mx-auto mb-16">
        <div class="text-gray-300 space-y-6 text-center">
          <p class="text-lg leading-relaxed">
            <i class="fas fa-quote-left text-blue-400 mr-2"></i>
            Halo! Saya <span class="text-white font-semibold">Arya Kusuma</span>,
            seorang mahasiswa Informatika di Universitas AMIKOM yang memiliki passion
            tinggi dalam dunia teknologi dan pengembangan web.
          </p>

          <p class="leading-relaxed">
            Saya percaya bahwa teknologi adalah alat yang powerful untuk menciptakan
            solusi inovatif dan memberikan dampak positif bagi masyarakat. Dengan
            pengalaman dalam berbagai teknologi web modern, saya senang mengeksplorasi
            dan mempelajari hal-hal baru dalam dunia programming.
          </p>

          <p class="leading-relaxed">
            Sebagai mahasiswa yang aktif, saya terus mengembangkan kemampuan melalui
            proyek-proyek praktis dan selalu terbuka untuk peluang kolaborasi dalam
            dunia teknologi.
          </p>
        </div>
      </div>

      <!-- Motivasi & Visi -->
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-lg">
          <h3 class="text-xl font-semibold text-white mb-4">
            <i class="fas fa-lightbulb text-yellow-400 mr-2"></i>
            Motivasi
          </h3>
          <p class="text-gray-300 italic leading-relaxed">
            "Setiap baris kode yang saya tulis adalah langkah menuju mimpi untuk
            menciptakan teknologi yang bermanfaat dan memberikan dampak positif
            bagi kehidupan orang lain."
          </p>
        </div>

        <div class="bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-lg">
          <h3 class="text-xl font-semibold text-white mb-4">
            <i class="fas fa-eye text-blue-400 mr-2"></i>
            Visi
          </h3>
          <p class="text-gray-300 italic leading-relaxed">
            "Menjadi developer yang tidak hanya mahir secara teknis, tetapi juga
            mampu menggunakan teknologi untuk menciptakan solusi yang bermakna
            bagi masyarakat."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import TypeWriter from './TypeWriter.vue'

// Definisikan nama komponen untuk menghindari warning
defineOptions({
  name: 'HeroSection'
});
</script>

<style scoped>
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700;900&display=swap');

/* Custom Font */
.custom-font {
  font-family: 'Exo 2', sans-serif;
  font-weight: 900;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* ========== SLIDE ANIMATIONS (TETAP ADA) ========== */

/* Slide In Left Animation */
@keyframes slide-in-left {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
  opacity: 0;
}

/* Slide In Right Animation */
@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
  opacity: 0;
}

/* Profile Container Sizing */
.profile-container {
  width: 400px;
  height: 400px;
}

.profile-ring {
  width: 100%;
  height: 100%;
}

/* Slow Spin Animation for Border Ring */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* Pulse Glow Animation */
@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.6;
  }
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

/* Orbital Animations for Floating Particles */
@keyframes orbit-1 {
  0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
}

@keyframes orbit-2 {
  0% { transform: rotate(60deg) translateX(190px) rotate(-60deg); }
  100% { transform: rotate(420deg) translateX(190px) rotate(-420deg); }
}

@keyframes orbit-3 {
  0% { transform: rotate(120deg) translateX(210px) rotate(-120deg); }
  100% { transform: rotate(480deg) translateX(210px) rotate(-480deg); }
}

@keyframes orbit-4 {
  0% { transform: rotate(180deg) translateX(195px) rotate(-180deg); }
  100% { transform: rotate(540deg) translateX(195px) rotate(-540deg); }
}

@keyframes orbit-5 {
  0% { transform: rotate(240deg) translateX(205px) rotate(-240deg); }
  100% { transform: rotate(600deg) translateX(205px) rotate(-600deg); }
}

@keyframes orbit-6 {
  0% { transform: rotate(300deg) translateX(185px) rotate(-300deg); }
  100% { transform: rotate(660deg) translateX(185px) rotate(-660deg); }
}

.animate-orbit-1 { animation: orbit-1 8s linear infinite; }
.animate-orbit-2 { animation: orbit-2 12s linear infinite; }
.animate-orbit-3 { animation: orbit-3 10s linear infinite; }
.animate-orbit-4 { animation: orbit-4 14s linear infinite; }
.animate-orbit-5 { animation: orbit-5 9s linear infinite; }
.animate-orbit-6 { animation: orbit-6 11s linear infinite; }

/* Enhanced Hover Effects */
.group:hover img {
  box-shadow:
    0 0 30px rgba(59, 130, 246, 0.4),
    0 0 60px rgba(147, 51, 234, 0.3),
    0 0 90px rgba(236, 72, 153, 0.2);
}

/* Custom large size for profile image */
.w-100 {
  width: 25rem; /* 400px */
}

.h-100 {
  height: 25rem; /* 400px */
}

.w-120 {
  width: 30rem; /* 480px */
}

.h-120 {
  height: 30rem; /* 480px */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .profile-container {
    width: 300px;
    height: 300px;
  }

  .group:hover img {
    transform: scale(1.05) rotate(2deg);
  }

  .animate-orbit-1,
  .animate-orbit-2,
  .animate-orbit-3,
  .animate-orbit-4,
  .animate-orbit-5,
  .animate-orbit-6 {
    display: none;
  }

  .custom-font {
    font-size: 2.5rem;
  }
}
</style>
