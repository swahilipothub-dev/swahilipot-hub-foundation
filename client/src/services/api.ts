
// Industrial Attachment API endpoints
export const industrialAttachmentAPI = {
  // Submit application
  submitApplication: async (data: any) => {
    const url = '/api/users/industrial-attachments';
    console.log('Submitting to:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit application');
    }
    
    return response.json();
  },

  // Get available institutions
  getInstitutions: async () => {
    const url = '/api/users/institutions';
    console.log('Fetching institutions from:', url);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch institutions');
    }
    return response.json();
  },

  // Get available courses
  getCourses: async (institutionId?: string) => {
    const url = institutionId 
      ? `/api/users/courses?institution=${institutionId}`
      : '/api/users/courses';
    
    console.log('Fetching courses from:', url);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    return response.json();
  },

  // Get available departments
  getDepartments: async () => {
    const url = '/api/users/departments';
    console.log('Fetching departments from:', url);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch departments');
    }
    return response.json();
  },
};

