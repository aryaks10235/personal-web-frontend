<script setup>
import SectionTitle from './SectionTitle.vue';

// Definisikan nama komponen untuk menghindari warning
defineOptions({
  name: 'EducationSection'
});

// Data ini akan kita pindah ke backend nanti
const educationHistory = [
{ id: 1, period: '2022 - Sekarang', institution: 'Universitas AMIKOM ', major: 'S1 - Informatika', icon: 'fas fa-graduation-cap', color: 'text-blue-400' },
{ id: 2, period: '2019 - 2022', institution: 'SMK MUHAMMADIYAH 1 SLEMAN', major: 'MULTIMEDIA', icon: 'fas fa-school', color: 'text-green-400' }
];
</script>
<template>
  <section id="pendidikan" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative">
        <div class="absolute h-full border-r-2 border-gray-600" style="left: 50%;"></div>
        <div v-for="(edu, index) in educationHistory" :key="edu.id"
             class="mb-8 flex justify-between items-center w-full">
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-gray-300">{{ edu.period }}</p>
              <div class="flex items-center justify-end mb-2">
                <h3 class="text-2xl font-bold text-white mr-3">{{ edu.institution }}</h3>
                <i :class="[edu.icon, edu.color]" class="text-2xl"></i>
              </div>
              <p class="text-gray-400">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-gray-400 rounded-full z-10 relative">
                <div class="absolute inset-0 bg-gray-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-gray-400 rounded-full z-10 relative">
                <div class="absolute inset-0 bg-gray-400 rounded-full animate-ping"></div>
              </div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-gray-300">{{ edu.period }}</p>
              <div class="flex items-center mb-2">
                <i :class="[edu.icon, edu.color]" class="text-2xl mr-3"></i>
                <h3 class="text-2xl font-bold text-white">{{ edu.institution }}</h3>
              </div>
              <p class="text-gray-400">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
