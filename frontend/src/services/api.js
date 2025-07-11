import axios from 'axios';

// API Configuration
const API_CONFIG = {
  development: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 5000
  },
  production: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://interactive-cv-alpha.vercel.app/api',
    timeout: 10000
  }
};

// Get current environment
const isDevelopment = import.meta.env.DEV;
const currentConfig = isDevelopment ? API_CONFIG.development : API_CONFIG.production;

// Create axios instance
const apiClient = axios.create({
  baseURL: currentConfig.baseURL,
  timeout: currentConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Log API calls in development
    if (isDevelopment) {
      console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Log API responses in development
    if (isDevelopment) {
      console.log(`API Response: ${response.status} ${response.config.url}`);
    }
    return response;
  },
  (error) => {
    console.error('API Response Error:', error);

    // Handle common errors
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      console.error(`API Error ${status}:`, data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error: No response received');
    } else {
      // Something else happened
      console.error('Request Error:', error.message);
    }

    return Promise.reject(error);
  }
);

// API methods
export const apiService = {
  // Education endpoints
  async getEducation() {
    try {
      const response = await apiClient.get('/education');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch education data:', error);
      throw error;
    }
  },

  // Skills endpoints
  async getSkills() {
    try {
      const response = await apiClient.get('/skills');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch skills data:', error);
      throw error;
    }
  },

  // Projects endpoints
  async getProjects() {
    try {
      const response = await apiClient.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch projects data:', error);
      throw error;
    }
  }
};

// Export axios instance for direct use if needed
export { apiClient };

// Export API configuration for debugging
export const getApiConfig = () => ({
  environment: isDevelopment ? 'development' : 'production',
  baseURL: currentConfig.baseURL,
  timeout: currentConfig.timeout
});
