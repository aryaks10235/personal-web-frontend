<template>
  <header class="bg-gray-900 shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo: klik untuk scroll ke Hero -->
      <div @click="scrollToTop" class="text-2xl font-bold text-white cursor-pointer select-none">
        ARYA KUSUMA
      </div>
      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li v-for="item in menu" :key="item.id">
          <a :href="`#${item.id}`"
             @click.prevent="scrollToSection(item.id)"
             :class="['text-gray-300 hover:text-white px-2 py-1 rounded transition-colors', activeSection === item.id ? 'bg-blue-600 text-white' : '']">
            {{ item.label }}
          </a>
        </li>
      </ul>
      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="md:hidden text-gray-300 hover:text-white focus:outline-none">
        <span v-if="!isMobileMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </nav>
    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-800 border-t border-gray-700">
      <ul class="px-6 py-4 space-y-2">
        <li v-for="item in menu" :key="item.id">
          <a :href="`#${item.id}`"
             @click.prevent="mobileScrollTo(item.id)"
             :class="['block py-2 px-3 rounded text-gray-300 hover:text-white hover:bg-blue-700', activeSection === item.id ? 'bg-blue-600 text-white' : '']">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
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
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'kontak', label: 'Kontak' },
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

// Scroll to top
const scrollToTop = () => {
  const profilSection = document.getElementById('profil')
  if (profilSection) {
    profilSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  activeSection.value = 'profil'
}

// Main scroll function - SIMPLE VERSION
const scrollToSection = (sectionId) => {
  console.log('Scrolling to:', sectionId)

  // Set active section immediately
  activeSection.value = sectionId

  // Find and scroll to section
  const section = document.getElementById(sectionId)
  if (section) {
    console.log('Section found, scrolling...')
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // Add animation for specific sections
    if (['skills', 'pendidikan'].includes(sectionId)) {
      section.classList.remove('enter')
      section.classList.add('before-enter')
      setTimeout(() => {
        section.classList.remove('before-enter')
        section.classList.add('enter')
      }, 300)
    }
  } else {
    console.error('Section not found:', sectionId)
  }
}

// Mobile scroll
const mobileScrollTo = (sectionId) => {
  closeMobileMenu()
  setTimeout(() => scrollToSection(sectionId), 300)
}

// Track scroll position
const handleScroll = () => {
  const sections = ['profil', 'pendidikan', 'skills', 'projects', 'kontak']
  const scrollPosition = window.scrollY + 150

  let foundActiveSection = 'profil'

  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId)
    if (section) {
      const sectionTop = section.offsetTop - 150
      const sectionHeight = section.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        foundActiveSection = sectionId
      }
    }
  })

  if (foundActiveSection !== activeSection.value) {
    activeSection.value = foundActiveSection
  }
}

// Setup
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header {
  transition: box-shadow 0.2s;
}
nav ul li a {
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
}
nav ul li a:hover,
nav ul li a:focus {
  background: #2563eb;
  color: #fff;
}
.bg-blue-600 {
  background: #2563eb;
}
.hover\:bg-blue-700:hover {
  background: #1d4ed8;
}
.border-t {
  border-top: 1px solid #374151;
}
.rounded {
  border-radius: 0.375rem;
}
.transition-colors {
  transition: background 0.2s, color 0.2s;
}
</style>
