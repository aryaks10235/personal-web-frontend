<script setup>
import SectionTitle from './SectionTitle.vue';

// Definisikan nama komponen untuk menghindari warning
defineOptions({
  name: 'SkillsSection'
});

// Data keahlian dengan teknologi yang diperluas (tanpa level)
const skills = [
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'text-green-400', glowColor: 'shadow-green-400/50' },
  { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-400', glowColor: 'shadow-yellow-400/50' },
  { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-400', glowColor: 'shadow-orange-400/50' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-400', glowColor: 'shadow-blue-400/50' },
  { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400', glowColor: 'shadow-cyan-400/50' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500', glowColor: 'shadow-green-500/50' },
  { name: 'PHP', icon: 'fab fa-php', color: 'text-purple-400', glowColor: 'shadow-purple-400/50' },
  { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-500', glowColor: 'shadow-blue-500/50' },
  { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-400', glowColor: 'shadow-red-400/50' },
  { name: 'Figma', icon: 'fab fa-figma', color: 'text-pink-400', glowColor: 'shadow-pink-400/50' },
  { name: 'TailwindCSS', icon: 'fas fa-wind', color: 'text-teal-400', glowColor: 'shadow-teal-400/50' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-500', glowColor: 'shadow-purple-500/50' }
];
</script>

<template>
  <section id="skills" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="skill in skills" :key="skill.name"
             class="group relative bg-transparent border-2 border-gray-600 p-6 rounded-xl text-center
                    hover:border-transparent transition-all duration-500 transform hover:scale-105
                    hover:shadow-2xl overflow-hidden
                    animate-glow-border"
             :class="skill.glowColor"
             :style="`--glow-color: ${skill.color.replace('text-', '')}`">

          <!-- Animated Border Gradient -->
          <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-r from-transparent via-current to-transparent
                      animate-border-spin pointer-events-none"
               :class="skill.color"></div>

          <!-- Content -->
          <div class="relative z-10">
            <i :class="[skill.icon, skill.color]"
               class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300
                      drop-shadow-lg group-hover:drop-shadow-2xl"></i>
            <h3 class="text-lg font-semibold text-white group-hover:text-white transition-colors duration-300">
              {{ skill.name }}
            </h3>
          </div>

          <!-- Floating Particles Effect -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div class="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-float-1"></div>
            <div class="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-float-2"></div>
            <div class="absolute bottom-3 left-4 w-1 h-1 bg-white rounded-full animate-float-3"></div>
            <div class="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full animate-float-1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animated Border Effect */
@keyframes border-spin {
  0% {
    background: linear-gradient(90deg, transparent, var(--tw-gradient-from), transparent);
    transform: translateX(-100%);
  }
  50% {
    background: linear-gradient(90deg, transparent, var(--tw-gradient-from), var(--tw-gradient-to), transparent);
  }
  100% {
    background: linear-gradient(90deg, transparent, var(--tw-gradient-to), transparent);
    transform: translateX(100%);
  }
}

.animate-border-spin {
  animation: border-spin 2s linear infinite;
}

/* Glow Border Animation */
@keyframes glow-border {
  0%, 100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4);
  }
}

.animate-glow-border:hover {
  animation: glow-border 2s ease-in-out infinite;
}

/* Floating Particles */
@keyframes float-1 {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
  33% { transform: translateY(-10px) translateX(5px); opacity: 1; }
  66% { transform: translateY(5px) translateX(-3px); opacity: 0.8; }
}

@keyframes float-2 {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
  50% { transform: translateY(-15px) translateX(-8px); opacity: 1; }
}

@keyframes float-3 {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
  25% { transform: translateY(-8px) translateX(10px); opacity: 1; }
  75% { transform: translateY(8px) translateX(-5px); opacity: 0.6; }
}

.animate-float-1 { animation: float-1 3s ease-in-out infinite; }
.animate-float-2 { animation: float-2 4s ease-in-out infinite; }
.animate-float-3 { animation: float-3 3.5s ease-in-out infinite; }

/* Enhanced Glow Effects */
.group:hover .shadow-green-400\/50 { box-shadow: 0 0 25px rgba(74, 222, 128, 0.5); }
.group:hover .shadow-yellow-400\/50 { box-shadow: 0 0 25px rgba(250, 204, 21, 0.5); }
.group:hover .shadow-orange-400\/50 { box-shadow: 0 0 25px rgba(251, 146, 60, 0.5); }
.group:hover .shadow-blue-400\/50 { box-shadow: 0 0 25px rgba(96, 165, 250, 0.5); }
.group:hover .shadow-cyan-400\/50 { box-shadow: 0 0 25px rgba(34, 211, 238, 0.5); }
.group:hover .shadow-green-500\/50 { box-shadow: 0 0 25px rgba(34, 197, 94, 0.5); }
.group:hover .shadow-purple-400\/50 { box-shadow: 0 0 25px rgba(196, 181, 253, 0.5); }
.group:hover .shadow-blue-500\/50 { box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); }
.group:hover .shadow-red-400\/50 { box-shadow: 0 0 25px rgba(248, 113, 113, 0.5); }
.group:hover .shadow-pink-400\/50 { box-shadow: 0 0 25px rgba(244, 114, 182, 0.5); }
.group:hover .shadow-teal-400\/50 { box-shadow: 0 0 25px rgba(45, 212, 191, 0.5); }
.group:hover .shadow-purple-500\/50 { box-shadow: 0 0 25px rgba(168, 85, 247, 0.5); }

/* Pulse Animation for Icons */
.group:hover i {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    filter: drop-shadow(0 0 5px currentColor);
    transform: scale(1.1);
  }
  50% {
    filter: drop-shadow(0 0 15px currentColor);
    transform: scale(1.15);
  }
}
</style>
