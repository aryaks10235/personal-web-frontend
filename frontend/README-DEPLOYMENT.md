# Personal Web CV - Frontend

Vue.js frontend aplikasi untuk menampilkan CV interaktif dengan data yang diambil dari API backend.

## 🚀 Features

- ✅ Vue 3 dengan Composition API
- ✅ Tailwind CSS untuk styling
- ✅ Responsive design
- ✅ API integration dengan error handling
- ✅ Loading states dan empty states
- ✅ Environment configuration
- ✅ Optimized untuk deployment di Vercel

## 🛠️ Tech Stack

- **Framework**: Vue 3
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: Vue Router
- **Deployment**: Vercel

## 📁 Structure

```
frontend/
├── src/
│   ├── components/        # Vue components
│   │   ├── Education.vue
│   │   ├── Skills.vue
│   │   ├── Projects.vue
│   │   └── SectionTitle.vue
│   ├── services/          # API services
│   │   └── api.js
│   ├── views/             # Page views
│   ├── router/            # Vue Router config
│   └── assets/            # Static assets
├── .env.example           # Environment variables example
├── .env.development       # Development config
├── .env.production        # Production config
├── vite.config.js         # Vite configuration
├── vercel.json            # Vercel deployment config
└── package.json
```

## 🔧 Environment Setup

### Development

1. Copy environment file:
```bash
cp .env.example .env.local
```

2. Update `.env.local` dengan konfigurasi development Anda

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Base URL untuk API backend | `http://localhost:3000/api` |
| `VITE_APP_TITLE` | Judul aplikasi | `Personal Web CV` |
| `VITE_APP_ENV` | Environment (dev/prod) | `development` |

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

### Production Deployment

Project ini dikonfigurasi untuk deployment otomatis di Vercel:

1. **Connect Repository**: Link repository GitHub ke Vercel
2. **Auto Deploy**: Setiap push ke `main` branch akan trigger deployment
3. **Environment Variables**: Set di Vercel dashboard jika diperlukan

## 📊 API Integration

### Backend API

Base URL: `https://interactive-cv-alpha.vercel.app/api`

### Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/education` | GET | Riwayat pendidikan |
| `/skills` | GET | Keahlian & teknologi |
| `/projects` | GET | Proyek unggulan |

### API Service

API calls di-handle oleh `src/services/api.js` dengan features:

- ✅ Environment-based URL configuration
- ✅ Request/Response interceptors
- ✅ Error handling
- ✅ Timeout configuration
- ✅ Development logging

### Response Format

Semua endpoints mengembalikan JSON array:

```json
[
  {
    "id": 1,
    "field1": "value1",
    "field2": "value2"
  }
]
```

## 🎨 Component Features

### Loading States
- Spinner dengan animasi
- Loading text yang informatif

### Error Handling
- Error states dengan pesan yang jelas
- Retry functionality

### Empty States
- Pesan ketika tidak ada data
- Icon yang sesuai dengan konteks

## 🔧 Build Configuration

### Vite Optimizations

- **Code splitting**: Vendor chunks terpisah
- **Tree shaking**: Dead code elimination
- **Minification**: Terser untuk production
- **Source maps**: Disabled di production
- **Asset optimization**: Automatic optimization

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze
```

## 📱 Responsive Design

- **Mobile First**: Optimized untuk mobile
- **Breakpoints**: Tailwind CSS breakpoints
- **Touch Friendly**: Proper touch targets

## 🔍 Performance

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

### Optimizations
- Code splitting
- Lazy loading
- Image optimization
- CSS purging
- Gzip compression

## 🚨 Troubleshooting

### Common Issues

**API Connection Failed**
```bash
# Check API URL di environment variables
echo $VITE_API_BASE_URL

# Test API endpoint
curl https://interactive-cv-alpha.vercel.app/api/education
```

**Build Errors**
```bash
# Clear cache dan rebuild
npm run clean
npm install
npm run build
```

**Deployment Issues**
- Check Vercel function logs
- Verify environment variables
- Check build output directory

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/nama-fitur`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/nama-fitur`
5. Submit pull request

## 📞 Support

Jika ada pertanyaan atau issues, buka GitHub issue atau contact maintainer.
