<template>
  <span class="typewriter">
    <span class="text">{{ displayText }}</span>
    <span class="cursor" :class="{ 'blink': showCursor }">|</span>
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Props
const props = defineProps({
  texts: {
    type: Array,
    default: () => ['Frontend Developer', 'UI/UX Designer']
  },
  speed: {
    type: Number,
    default: 100
  },
  delay: {
    type: Number,
    default: 1000
  },
  deleteSpeed: {
    type: Number,
    default: 50
  },
  pauseTime: {
    type: Number,
    default: 2000
  }
})

// State
const displayText = ref('')
const showCursor = ref(true)
const currentIndex = ref(0)
const currentTextIndex = ref(0)
const isDeleting = ref(false)

// Typewriter effect with delete and retype
const typewriterEffect = () => {
  const currentText = props.texts[currentTextIndex.value]

  if (!isDeleting.value) {
    // Typing mode
    if (currentIndex.value < currentText.length) {
      displayText.value += currentText.charAt(currentIndex.value)
      currentIndex.value++
      setTimeout(typewriterEffect, props.speed)
    } else {
      // Finished typing, pause then start deleting
      setTimeout(() => {
        isDeleting.value = true
        typewriterEffect()
      }, props.pauseTime)
    }
  } else {
    // Deleting mode
    if (displayText.value.length > 0) {
      displayText.value = displayText.value.slice(0, -1)
      setTimeout(typewriterEffect, props.deleteSpeed)
    } else {
      // Finished deleting, move to next text
      isDeleting.value = false
      currentIndex.value = 0
      currentTextIndex.value = (currentTextIndex.value + 1) % props.texts.length
      setTimeout(typewriterEffect, props.speed)
    }
  }
}

// Start typing after delay
onMounted(() => {
  setTimeout(() => {
    typewriterEffect()
  }, props.delay)
})
</script>

<style scoped>
.typewriter {
  font-family: 'Courier New', monospace;
  font-weight: 600;
}

.text {
  color: #60a5fa; /* blue-400 */
}

.cursor {
  color: #60a5fa; /* blue-400 */
  animation: blink 1s infinite;
  font-weight: bold;
}

.cursor.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* Responsive text size */
@media (max-width: 768px) {
  .typewriter {
    font-size: 1.1rem;
  }
}

@media (min-width: 769px) {
  .typewriter {
    font-size: 1.25rem;
  }
}
</style>
