<script setup>
defineOptions({ name: 'EducationSection' });
import { ref, onMounted } from 'vue';
import { apiService } from '@/services/api.js';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    educationHistory.value = await apiService.getEducation();
  } catch (err) {
    console.error('Gagal mengambil data pendidikan:', err);
    error.value = 'Gagal memuat data pendidikan. Silakan coba lagi nanti.';
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <section class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <span class="ml-3 text-gray-300">Memuat data pendidikan...</span>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="bg-red-900/20 border border-red-500 rounded-lg p-6 max-w-md mx-auto">
          <i class="fas fa-exclamation-triangle text-red-400 text-2xl mb-3"></i>
          <p class="text-red-300">{{ error }}</p>
        </div>
      </div>

      <!-- Content -->
      <div v-else-if="educationHistory.length > 0" class="relative">
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

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <i class="fas fa-graduation-cap text-gray-500 text-4xl mb-4"></i>
        <p class="text-gray-400">Tidak ada data pendidikan yang tersedia.</p>
      </div>
    </div>
  </section>
</template>
