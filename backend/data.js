
const educationHistory = [
  { id: 1, period: '2022 - Sekarang', institution: 'Universitas AMIKOM', major: 'S1 - Informatika', icon: 'fas fa-graduation-cap', color: 'text-blue-400' },
  { id: 2, period: '2019 - 2022', institution: 'SMK MUHAMMADIYAH 1 SLEMAN', major: 'MULTIMEDIA', icon: 'fas fa-school', color: 'text-green-400' },
  { id: 3, period: '2016 - 2019', institution: 'SMP NEGERI 4 Ngaglik', major: 'Sekolah Menengah Pertama', icon: 'fas fa-user-graduate', color: 'text-purple-400' }
];

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
  }
];

module.exports = { educationHistory, skills, projects };
