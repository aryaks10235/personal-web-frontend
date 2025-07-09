<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Education from '@/components/Education.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
</script>
<template>
<div class="bg-gray-900">
<Navbar />
<main class="bg-gray-900">
<Hero />
<div id="pendidikan" v-animate-on-scroll><Education /></div>
<div id="skills" v-animate-on-scroll><Skills /></div>
<div id="projects" v-animate-on-scroll><Projects /></div>
<div id="kontak" v-animate-on-scroll><Contact /></div>
</main>
</div>
</template>
