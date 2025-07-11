<script setup>
import { ref, onMounted, defineOptions } from 'vue';
import { apiService } from '@/services/api.js';
import SectionTitle from './SectionTitle.vue';

defineOptions({
  name: 'ProjectsSection'
});

const projects = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    projects.value = await apiService.getProjects();
  } catch (err) {
    console.error('Gagal mengambil data proyek:', err);
    error.value = 'Gagal memuat data proyek. Silakan coba lagi nanti.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <span class="ml-3 text-gray-300">Memuat data proyek...</span>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="bg-red-900/20 border border-red-500 rounded-lg p-6 max-w-md mx-auto">
          <i class="fas fa-exclamation-triangle text-red-400 text-2xl mb-3"></i>
          <p class="text-red-300">{{ error }}</p>
        </div>
      </div>

      <!-- Content -->
      <div v-else-if="projects.length > 0" class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div v-for="project in projects" :key="project.title"
             class="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center mb-3">
              <i :class="[project.icon, project.color]" class="text-2xl mr-3"></i>
              <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
            </div>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span v-for="t in project.tech" :key="t"
                    class="inline-block bg-gray-600 text-gray-200 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                {{ t }}
              </span>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer"
               class="text-gray-300 font-semibold hover:underline">
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <i class="fas fa-folder-open text-gray-500 text-4xl mb-4"></i>
        <p class="text-gray-400">Tidak ada data proyek yang tersedia.</p>
      </div>
    </div>
  </section>
</template>
