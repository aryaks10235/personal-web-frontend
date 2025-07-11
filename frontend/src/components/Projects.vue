<script setup>
import { ref, onMounted, defineOptions } from 'vue';
import axios from 'axios';
// import SectionTitle from './SectionTitle.vue'; // Aktifkan jika Anda punya

defineOptions({
  name: 'ProjectsSection'
});

const projects = ref([]);
const API_URL = import.meta.env.PROD ? '/api/projects' :
'http://localhost:3000/api/projects';
onMounted(async () => {
try {
projects.value = (await axios.get(API_URL)).data;
} catch (error) {
console.error('Gagal mengambil data proyek:', error);
}
});
</script>

<template>
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
    </div>
  </section>
</template>
