<script setup>
import SectionTitle from './SectionTitle.vue';

// Definisikan nama komponen untuk menghindari warning
defineOptions({
  name: 'SkillsSection'
});

const skills = [
  { name: 'Vue.js', level: 'Mahir', icon: 'fab fa-vuejs', color: 'text-green-400' },
  { name: 'JavaScript', level: 'Mahir', icon: 'fab fa-js-square', color: 'text-yellow-400' },
  { name: 'Tailwind CSS', level: 'Mahir', icon: 'fas fa-paint-brush', color: 'text-cyan-400' },
  { name: 'Node.js', level: 'Menengah', icon: 'fab fa-node-js', color: 'text-green-500' },
  { name: 'Express.js', level: 'Menengah', icon: 'fas fa-server', color: 'text-gray-400' },
  { name: 'PostgreSQL', level: 'Menengah', icon: 'fas fa-database', color: 'text-blue-400' },
  { name: 'Git & GitHub', level: 'Mahir', icon: 'fab fa-github', color: 'text-purple-400' },
  { name: 'HTML5 & CSS3', level: 'Mahir', icon: 'fab fa-html5', color: 'text-orange-400' },
];
</script>

<template>
  <section id="skill" class="py-20 bg-gray-700">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="skill in skills" :key="skill.name"
             class="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-700">
          <i :class="[skill.icon, skill.color]" class="text-4xl mb-4"></i>
          <h3 class="text-xl font-bold text-white">{{ skill.name }}</h3>
          <p class="text-gray-300 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
