

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
             @click.prevent="smoothScrollTo(item.id)"
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

// Definisikan nama komponen untuk menghindari warning
defineOptions({
  name: 'NavbarComponent'
})

// Daftar menu dan id section
const menu = [
  { id: 'profil', label: 'Profil' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'kontak', label: 'Kontak' },
]

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Active section tracking
const activeSection = ref('profil')

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Scroll to top (Hero/Profil section)
const scrollToTop = (event) => {
  const profilSection = document.getElementById('profil');
  if (profilSection) {
    // Calculate offset for fixed navbar
    const navbarHeight = 80;
    const sectionTop = profilSection.offsetTop - navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  } else {
    // Fallback to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Add click animation
  if (event && event.target) {
    animateClick(event.target);
  }
};

// Smooth scroll to section with animation
const smoothScrollTo = (sectionId, event) => {
  const section = document.getElementById(sectionId)
  if (section) {
    // Calculate offset for fixed navbar
    const navbarHeight = 80
    const sectionTop = section.offsetTop - navbarHeight

    // Smooth scroll with custom easing
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    })

    // Update active section
    activeSection.value = sectionId

    // Add click animation to the clicked link
    const clickedLink = event ? event.target.closest('.nav-link') : null
    if (clickedLink) {
      animateClick(clickedLink)
    }
  }
}

// Mobile scroll with menu close
const mobileScrollTo = (sectionId) => {
  // Close mobile menu first
  closeMobileMenu()

  // Wait for menu animation to complete
  setTimeout(() => {
    smoothScrollTo(sectionId)
  }, 300)
}

// Click animation effect
const animateClick = (element) => {
  // Add pulse effect
  element.classList.add('animate-pulse-click')

  // Remove class after animation
  setTimeout(() => {
    element.classList.remove('animate-pulse-click')
  }, 600)

  // Icon bounce animation
  const icon = element.querySelector('i')
  if (icon) {
    icon.classList.add('animate-bounce-icon')
    setTimeout(() => {
      icon.classList.remove('animate-bounce-icon')
    }, 800)
  }
}

// Track scroll position for active section highlighting
const handleScroll = () => {
  const sections = ['profil', 'pendidikan', 'skills', 'projects', 'kontak']
  const scrollPosition = window.scrollY + 100

  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId)
    if (section) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSection.value = sectionId
      }
    }
  })
}

// Setup scroll listener on mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

// Cleanup on unmount
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

<style scoped>
/* ========== NAVBAR ANIMATIONS ========== */

/* Fade in animation for navbar */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

/* ========== NAVIGATION LINK ANIMATIONS ========== */

/* Underline animation on hover */
.nav-link::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::before {
  width: 100%;
}

/* Active section highlighting */
.nav-link.active {
  color: #3b82f6 !important;
}

.nav-link.active::before {
  width: 100%;
}

/* Icon animations */
.animate-icon {
  transition: all 0.3s ease;
}

.nav-link:hover .animate-icon {
  transform: scale(1.2) rotate(5deg);
  filter: brightness(1.2);
}

/* ========== CLICK ANIMATIONS ========== */

/* Pulse effect on click */
@keyframes pulse-click {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

.animate-pulse-click {
  animation: pulse-click 0.6s ease-out;
}

/* Icon bounce on click */
@keyframes bounce-icon {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-8px) scale(1.3);
  }
  60% {
    transform: translateY(-4px) scale(1.1);
  }
}

.animate-bounce-icon {
  animation: bounce-icon 0.8s ease-out;
}

/* ========== MOBILE MENU ANIMATIONS ========== */

/* Mobile menu slide down */
.mobile-menu {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile nav link hover effect */
.mobile-nav-link {
  position: relative;
  overflow: hidden;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  transition: left 0.5s ease;
}

.mobile-nav-link:hover::before {
  left: 100%;
}

/* ========== RESPONSIVE DESIGN ========== */

/* Mobile menu button animation */
.fa-bars, .fa-times {
  transition: transform 0.3s ease;
}

.fa-times {
  transform: rotate(180deg);
}

/* Logo hover effect */
header div:first-child:hover {
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  transform: scale(1.05);
}

/* ========== SCROLL BEHAVIOR ========== */

/* Smooth navbar shadow on scroll */
header {
  transition: all 0.3s ease;
}

header.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

/* ========== ENHANCED EFFECTS ========== */

/* Gradient text effect for active links */
.nav-link.active {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Glassmorphism effect for mobile menu */
.mobile-menu {
  backdrop-filter: blur(10px);
  background: rgba(31, 41, 55, 0.95);
}

/* Icon glow effect on hover */
.nav-link:hover .animate-icon {
  filter: drop-shadow(0 0 8px currentColor);
}

/* Loading animation for smooth scroll */
@keyframes loading-dot {
  0%, 20% {
    color: rgba(59, 130, 246, 0.2);
    transform: scale(1);
  }
  50% {
    color: rgba(59, 130, 246, 1);
    transform: scale(1.2);
  }
  80%, 100% {
    color: rgba(59, 130, 246, 0.2);
    transform: scale(1);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-link::before {
    display: none;
  }

  .mobile-nav-link:active {
    transform: scale(0.95);
    background-color: rgba(59, 130, 246, 0.2);
  }
}

/* Accessibility improvements */
.nav-link:focus,
.mobile-nav-link:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Performance optimization */
* {
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
