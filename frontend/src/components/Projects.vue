<script setup>
import SectionTitle from './SectionTitle.vue';

// Definisikan nama komponen untuk menghindari warning
defineOptions({
  name: 'ProjectsSection'
});

const projects = [
  {
    title: 'Cuts Project Website',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Website Barbershop online dengan fitur booking dan pembayaran.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#',
    icon: 'fas fa-cut',
    color: 'text-emerald-400'
  },
  {
    title: 'Website Personal Branding',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Portfolio website untuk personal branding dan showcasing projects.',
    tech: ['Vue.js', 'TailwindCSS', 'Vite'],
    link: '#',
    icon: 'fas fa-user-circle',
    color: 'text-violet-400'
  },
  
];
</script>

<template>
  <section id="projects" class="py-20 bg-gray-800">
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
