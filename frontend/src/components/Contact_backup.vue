<script setup>
import { ref, reactive } from 'vue'
import SectionTitle from './SectionTitle.vue'

defineOptions({
  name: 'ContactSection'
})

// Form state
const form = reactive({
  nama: '',
  email: '',
  pesan: ''
})

// UI state
const isSubmitting = ref(false)
const message = ref({
  text: '',
  type: ''
})

// Form validation
const errors = reactive({
  nama: '',
  email: '',
  pesan: ''
})

// Validate form
const validateForm = () => {
  // Reset errors
  errors.nama = ''
  errors.email = ''
  errors.pesan = ''

  let isValid = true

  // Validate nama
  if (!form.nama.trim()) {
    errors.nama = 'Nama wajib diisi'
    isValid = false
  } else if (form.nama.trim().length < 2) {
    errors.nama = 'Nama minimal 2 karakter'
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Email wajib diisi'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Format email tidak valid'
    isValid = false
  }

  // Validate pesan
  if (!form.pesan.trim()) {
    errors.pesan = 'Pesan wajib diisi'
    isValid = false
  } else if (form.pesan.trim().length < 10) {
    errors.pesan = 'Pesan minimal 10 karakter'
    isValid = false
  }

  return isValid
}

// Submit form function
const submitForm = async () => {
  if (!validateForm()) {
    message.value = {
      text: 'Mohon periksa kembali form Anda.',
      type: 'error'
    }
    setTimeout(() => {
      message.value = { text: '', type: '' }
    }, 5000)
    return
  }

  isSubmitting.value = true
  message.value = { text: '', type: '' }

  try {
    // Kirim data ke Formspree
    const response = await fetch('https://formspree.io/f/mgvyjkdj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.nama,
        email: form.email,
        message: form.pesan,
        _subject: `📧 Pesan dari ${form.nama} - Portfolio Website`,
      })
    })

    if (response.ok) {
      message.value = {
        text: '✅ Pesan berhasil dikirim! Terima kasih, saya akan membalas segera.',
        type: 'success'
      }

      // Reset form setelah berhasil
      form.nama = ''
      form.email = ''
      form.pesan = ''
    } else {
      throw new Error('Gagal mengirim pesan')
    }

  } catch (error) {
    console.error('Error:', error)

    // Fallback ke mailto jika Formspree gagal
    const subject = encodeURIComponent(`📧 Pesan dari ${form.nama} - Portfolio Website`)
    const emailContent = `Halo Arya,

Saya ${form.nama} ingin menghubungi Anda melalui portfolio website.

📋 DETAIL KONTAK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Nama Lengkap    : ${form.nama}
📧 Email Address   : ${form.email}
📅 Tanggal Kirim   : ${new Date().toLocaleDateString('id-ID', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})}
🕐 Waktu Kirim     : ${new Date().toLocaleTimeString('id-ID')}

💬 PESAN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${form.pesan}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Pesan ini dikirim melalui form kontak di portfolio website Anda.
🔄 Silakan balas email ini untuk memulai percakapan.

Terima kasih!
Salam hormat,
${form.nama}`

    const body = encodeURIComponent(emailContent)
    const mailtoLink = `mailto:aryakusuma10235@students.amikom.ac.id?subject=${subject}&body=${body}`

    window.open(mailtoLink, '_blank')

    message.value = {
      text: '⚠️ Menggunakan email client sebagai backup. Silakan klik "Send" untuk mengirim pesan.',
      type: 'success'
    }
  } finally {
    isSubmitting.value = false

    setTimeout(() => {
      message.value = { text: '', type: '' }
    }, 8000)
  }
}
</script>

<template>
  <section id="kontak" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <SectionTitle title="Hubungi Saya" />
          <p class="text-xl text-gray-300 mb-8">
            Jangan ragu untuk terhubung atau bertanya. Saya siap membantu!
          </p>
        </div>

        <!-- Contact Form -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-gray-700 rounded-lg shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <h3 class="text-2xl font-bold text-white flex items-center">
                <i class="fas fa-paper-plane mr-3"></i>
                Form Kontak
              </h3>
              <p class="text-blue-100 mt-2">Isi formulir di bawah untuk mengirim pesan</p>
            </div>

            <div class="p-8">
              <form @submit.prevent="submitForm" class="space-y-1">
                <!-- Tabel Form tanpa header -->
                <div class="overflow-x-auto">
                  <table class="w-full bg-gray-800 rounded-lg overflow-hidden">
                    <tbody>
                      <!-- Row Nama -->
                      <tr class="border-b border-gray-600 hover:bg-gray-750 transition-colors duration-200">
                        <td class="px-6 py-6 align-top w-1/3">
                          <label for="nama" class="block text-3xl font-medium text-gray-300">
                            <i class="fas fa-user mr-3 text-blue-400 text-2xl"></i>
                            Nama Lengkap
                          </label>
                        </td>
                        <td class="px-6 py-6">
                          <input
                            type="text"
                            id="nama"
                            name="name"
                            v-model="form.nama"
                            :class="[
                              'w-full px-4 py-3 bg-gray-600 border rounded-lg text-white placeholder-gray-400',
                              'focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300',
                              errors.nama ? 'border-red-500 focus:ring-red-500' : 'border-gray-500 focus:ring-blue-500'
                            ]"
                            placeholder="Contoh: John Doe"
                            maxlength="100"
                          />
                          <div class="flex justify-between mt-1">
                            <span v-if="errors.nama" class="text-xs text-red-400">{{ errors.nama }}</span>
                            <span class="text-xs text-gray-500 ml-auto">{{ form.nama.length }}/100</span>
                          </div>
                        </td>
                      </tr>

                      <!-- Row Email -->
                      <tr class="border-b border-gray-600 hover:bg-gray-750 transition-colors duration-200">
                        <td class="px-6 py-6 align-top w-1/3">
                          <label for="email" class="block text-3xl font-medium text-gray-300">
                            <i class="fas fa-envelope mr-3 text-green-400 text-2xl"></i>
                            Email Address
                          </label>
                        </td>
                        <td class="px-6 py-6">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            v-model="form.email"
                            :class="[
                              'w-full px-4 py-3 bg-gray-600 border rounded-lg text-white placeholder-gray-400',
                              'focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300',
                              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-500 focus:ring-blue-500'
                            ]"
                            placeholder="contoh@email.com"
                          />
                          <span v-if="errors.email" class="text-xs text-red-400 block mt-1">{{ errors.email }}</span>
                        </td>
                      </tr>

                      <!-- Row Pesan -->
                      <tr class="hover:bg-gray-750 transition-colors duration-200">
                        <td class="px-6 py-6 align-top w-1/3">
                          <label for="pesan" class="block text-3xl font-medium text-gray-300">
                            <i class="fas fa-comment-dots mr-3 text-yellow-400 text-2xl"></i>
                            Pesan
                          </label>
                        </td>
                        <td class="px-6 py-6">
                          <textarea
                            id="pesan"
                            name="message"
                            v-model="form.pesan"
                            rows="6"
                            :class="[
                              'w-full px-4 py-3 bg-gray-600 border rounded-lg text-white placeholder-gray-400',
                              'focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300',
                              'resize-none',
                              errors.pesan ? 'border-red-500 focus:ring-red-500' : 'border-gray-500 focus:ring-blue-500'
                            ]"
                            placeholder="Tulis pesan, pertanyaan, atau proposal proyek Anda di sini..."
                            maxlength="1000"
                          ></textarea>
                          <div class="flex justify-between mt-1">
                            <span v-if="errors.pesan" class="text-xs text-red-400">{{ errors.pesan }}</span>
                            <span class="text-xs text-gray-500 ml-auto">{{ form.pesan.length }}/1000</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Submit Button -->
                <div class="pt-8">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-6 rounded-lg
                           hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform
                           hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    <i v-if="!isSubmitting" class="fas fa-paper-plane mr-2"></i>
                    <i v-else class="fas fa-spinner fa-spin mr-2"></i>
                    {{ isSubmitting ? 'Menyiapkan Email...' : '📧 Kirim Pesan' }}
                  </button>
                </div>
              </form>

              <!-- Success/Error Messages -->
              <div v-if="message.text" class="mt-6 p-4 rounded-lg"
                   :class="message.type === 'success' ? 'bg-green-800 text-green-100 border border-green-600' : 'bg-red-800 text-red-100 border border-red-600'">
                <div class="flex items-start">
                  <i :class="message.type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle'" class="mr-2 mt-0.5 flex-shrink-0"></i>
                  <span class="text-sm">{{ message.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="mt-16 bg-gray-700 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h4 class="text-2xl font-semibold text-white mb-6 text-center flex items-center justify-center">
            <i class="fas fa-share-alt mr-3 text-purple-400"></i>
            Terhubung dengan Saya
          </h4>
          <div class="flex justify-center space-x-8">
            <!-- GitHub -->
            <a href="https://github.com/aryaks10235" target="_blank" rel="noopener noreferrer"
               class="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110">
              <div class="bg-gray-600 p-4 rounded-full group-hover:bg-purple-600 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/25">
                <i class="fab fa-github text-3xl"></i>
              </div>
              <span class="text-sm font-medium">GitHub</span>
              <span class="text-xs text-gray-500 group-hover:text-purple-300">@aryaks10235</span>
            </a>

            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/arya-kusuma-student" target="_blank" rel="noopener noreferrer"
               class="group flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <div class="bg-gray-600 p-4 rounded-full group-hover:bg-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                <i class="fab fa-linkedin text-3xl"></i>
              </div>
              <span class="text-sm font-medium">LinkedIn</span>
              <span class="text-xs text-gray-500 group-hover:text-blue-300">Professional Network</span>
            </a>

            <!-- Instagram -->
            <a href="https://instagram.com/__aryaks" target="_blank" rel="noopener noreferrer"
               class="group flex flex-col items-center space-y-2 text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
              <div class="bg-gray-600 p-4 rounded-full group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 shadow-lg group-hover:shadow-pink-500/25">
                <i class="fab fa-instagram text-3xl"></i>
              </div>
              <span class="text-sm font-medium">Instagram</span>
              <span class="text-xs text-gray-500 group-hover:text-pink-300">@__aryaks</span>
            </a>

            <!-- Email Direct -->
            <a href="mailto:aryakusuma10235@students.amikom.ac.id"
               class="group flex flex-col items-center space-y-2 text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110">
              <div class="bg-gray-600 p-4 rounded-full group-hover:bg-green-600 transition-all duration-300 shadow-lg group-hover:shadow-green-500/25">
                <i class="fas fa-envelope text-3xl"></i>
              </div>
              <span class="text-sm font-medium">Email</span>
              <span class="text-xs text-gray-500 group-hover:text-green-300">My Email</span>
            </a>
          </div>

          <!-- Social Media Description -->
          <div class="mt-8 text-center">
            <p class="text-gray-400 text-sm">
              <i class="fas fa-heart text-red-400 mr-1"></i>
              Mari terhubung dan berbagi pengalaman di dunia teknologi!
            </p>
          </div>
        </div>

        <!-- Footer Copyright -->
        <div class="text-center mt-12 pt-8 border-t border-gray-600">
          <p class="text-gray-500">
            &copy; {{ new Date().getFullYear() }} Arya Kusuma. Dibuat dengan
            <i class="fab fa-vuejs text-green-400 mx-1"></i>Vue.js
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Table row hover effect */
.hover\:bg-gray-750:hover {
  background-color: rgb(55, 65, 81);
}

/* Input focus effects */
input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Button hover effects */
button:hover:not(:disabled) {
  transform: translateY(-1px);
}

/* Form validation styling */
.border-red-500 {
  border-color: #ef4444;
}

/* Character counter */
.text-xs {
  font-size: 0.75rem;
}

/* Responsive table */
@media (max-width: 640px) {
  .overflow-x-auto {
    overflow-x: auto;
  }

  table {
    min-width: 500px;
  }
}

/* Social media hover effects */
.group:hover .bg-gray-600 {
  transform: translateY(-2px);
}

/* Enhanced social media animations */
.group:hover {
  animation: socialBounce 0.6s ease-in-out;
}

@keyframes socialBounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-5px) scale(1.05);
  }
  60% {
    transform: translateY(-3px) scale(1.02);
  }
}

/* Gradient hover for Instagram */
.group:hover .group-hover\:from-purple-600 {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
}

/* Shadow effects for social icons */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.group-hover\:shadow-purple-500\/25:hover {
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.25);
}

.group-hover\:shadow-blue-500\/25:hover {
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.25);
}

.group-hover\:shadow-pink-500\/25:hover {
  box-shadow: 0 10px 25px rgba(236, 72, 153, 0.25);
}

.group-hover\:shadow-green-500\/25:hover {
  box-shadow: 0 10px 25px rgba(34, 197, 94, 0.25);
}
</style>
