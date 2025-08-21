import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Industrial Attachments API
export const industrialAttachmentsApi = {
  getAll: (includeArchived?: boolean) => api.get('/admin/attachments', { 
    params: { includeArchived: includeArchived ? 'true' : 'false' } 
  }),
  getById: (id: string) => api.get(`/admin/attachments/${id}`),
  create: (data: any) => api.post('/admin/attachments', data),
  update: (id: string, data: any) => api.put(`/admin/attachments/${id}`, data),
  delete: (id: string) => api.delete(`/admin/attachments/${id}`),
  toggleAcceptance: (id: string) => api.put(`/admin/attachments/${id}/accept`),
  toggleArchive: (id: string) => api.put(`/admin/attachments/${id}/archive`),
  exportCSV: () => api.get('/admin/export/attachments', { responseType: 'blob' }),
};

// Departments API
export const departmentsApi = {
  getAll: () => api.get('/admin/departments'),
  getById: (id: string) => api.get(`/admin/departments/${id}`),
  create: (data: any) => api.post('/admin/departments', data),
  update: (id: string, data: any) => api.put(`/admin/departments/${id}`, data),
  delete: (id: string) => api.delete(`/admin/departments/${id}`),
  exportCSV: () => api.get('/admin/export/departments', { responseType: 'blob' }),
};

// Institutions API
export const institutionsApi = {
  getAll: () => api.get('/admin/institutions'),
  getById: (id: string) => api.get(`/admin/institutions/${id}`),
  create: (data: any) => api.post('/admin/institutions', data),
  update: (id: string, data: any) => api.put(`/admin/institutions/${id}`, data),
  delete: (id: string) => api.delete(`/admin/institutions/${id}`),
  exportCSV: () => api.get('/admin/export/institutions', { responseType: 'blob' }),
};

// Courses API
export const coursesApi = {
  getAll: () => api.get('/admin/courses'),
  getById: (id: string) => api.get(`/admin/courses/${id}`),
  create: (data: any) => api.post('/admin/courses', data),
  update: (id: string, data: any) => api.put(`/admin/courses/${id}`, data),
  delete: (id: string) => api.delete(`/admin/courses/${id}`),
  exportCSV: () => api.get('/admin/export/courses', { responseType: 'blob' }),
};

// Users API
export const usersApi = {
  getAll: () => api.get('/admin/users'),
  getById: (id: string) => api.get(`/admin/users/${id}`),
  create: (data: any) => api.post('/admin/users', data),
  update: (id: string, data: any) => api.put(`/admin/users/${id}`, data),
  delete: (id: string) => api.delete(`/admin/users/${id}`),
  exportCSV: () => api.get('/admin/export/users', { responseType: 'blob' }),
};

// Analytics API
export const analyticsApi = {
  getAnalytics: () => api.get('/admin/analytics'),
};
