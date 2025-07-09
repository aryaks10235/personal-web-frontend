

<template>
  <header class="bg-gray-900 shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div @click="scrollToTop" class="text-2xl font-bold text-white cursor-pointer hover:text-blue-300 transition-colors duration-300">
          ARYA KUSUMA
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6">
          <li v-for="item in menu" :key="item.id">
            <a
              :href="`#${item.id}`"
              @click.prevent="scrollToSection(item.id)"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-all duration-300',
                activeSection === item.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-200 hover:text-white hover:bg-gray-500'
              ]"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-white hover:text-blue-300 focus:outline-none transition-colors duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-500"
      >
        <ul class="space-y-2 pt-4">
          <li v-for="item in menu" :key="item.id">
            <a
              :href="`#${item.id}`"
              @click.prevent="mobileScrollTo(item.id)"
              :class="[
                'block px-3 py-2 rounded-md text-base font-medium transition-all duration-300',
                activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-200 hover:text-white hover:bg-gray-500'
              ]"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'NavbarComponent'
})

// Menu items
const menu = [
  { id: 'profil', label: 'Profil' },
  { id: 'tentang-saya', label: 'Tentang' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'kontak', label: 'Kontak' }
]

// State
const isMobileMenuOpen = ref(false)
const activeSection = ref('profil')

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Debug function to check if all sections exist
const checkSections = () => {
  console.log('🔍 Checking all sections...')
  menu.forEach(item => {
    const element = document.getElementById(item.id)
    if (element) {
      console.log(`✅ Section "${item.id}" ditemukan at position:`, element.offsetTop)
    } else {
      console.warn(`❌ Section "${item.id}" tidak ditemukan`)
    }
  })
}

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  activeSection.value = 'profil'
  closeMobileMenu()
}

// Scroll to section function
const scrollToSection = (sectionId) => {
  console.log(`🎯 Attempting to scroll to: ${sectionId}`)
  const element = document.getElementById(sectionId)
  if (element) {
    console.log(`✅ Element found for: ${sectionId}`)
    const navbarHeight = 80
    const elementPosition = element.offsetTop - navbarHeight

    console.log(`📍 Scrolling to position: ${elementPosition}`)

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })

    activeSection.value = sectionId
    closeMobileMenu()
  } else {
    console.warn(`❌ Section dengan ID "${sectionId}" tidak ditemukan`)
  }
}

// Mobile scroll function
const mobileScrollTo = (sectionId) => {
  closeMobileMenu()
  setTimeout(() => {
    scrollToSection(sectionId)
  }, 300)
}

// Track scroll position for active section
const handleScroll = () => {
  const sections = menu.map(item => item.id)
  const scrollPosition = window.scrollY + 150 // Increased offset for better detection

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && scrollPosition >= section.offsetTop - 100) {
      activeSection.value = sections[i]
      break
    }
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  // Check if all sections exist after component is mounted
  setTimeout(() => {
    console.log('🚀 Navbar mounted, checking sections...')
    checkSections()
  }, 2000) // Increased delay to ensure all components are loaded
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Navigation styles */
nav {
  backdrop-filter: blur(10px);
}

/* Logo hover effect */
div:first-child:hover {
  transform: scale(1.02);
}

/* Mobile menu animation */
div:last-child {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Active link styling */
.bg-blue-600 {
  background-color: #2563eb;
}

/* Hover effects */
.hover\:bg-gray-500:hover {
  background-color: #6b7280;
}

.hover\:text-blue-300:hover {
  color: #93c5fd;
}

/* Focus styles for accessibility */
a:focus,
button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
