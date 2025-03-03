import { mockProperties } from '../data/mockProperties';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface SearchParams {
  query?: string;
  priceMin?: number;
  priceMax?: number;
  beds?: number;
  propertyType?: string;
}

export const api = {
  // Get all properties with optional filtering
  async getProperties(params?: SearchParams) {
    await delay(800); // Simulate network delay

    let filteredProperties = [...mockProperties];

    if (params) {
      const { query, priceMin, priceMax, beds, propertyType } = params;

      if (query) {
        const searchTerm = query.toLowerCase();
        filteredProperties = filteredProperties.filter(property =>
          property.title.toLowerCase().includes(searchTerm) ||
          property.location.toLowerCase().includes(searchTerm)
        );
      }

      if (priceMin !== undefined) {
        filteredProperties = filteredProperties.filter(property =>
          property.price >= priceMin
        );
      }

      if (priceMax !== undefined) {
        filteredProperties = filteredProperties.filter(property =>
          property.price <= priceMax
        );
      }

      if (beds !== undefined) {
        filteredProperties = filteredProperties.filter(property =>
          property.bedrooms >= beds
        );
      }

      if (propertyType && propertyType !== 'any') {
        filteredProperties = filteredProperties.filter(property =>
          property.type.toLowerCase() === propertyType.toLowerCase()
        );
      }
    }

    return filteredProperties;
  },

  // Get a single property by ID
  async getProperty(id: string) {
    await delay(500); // Simulate network delay
    
    const property = mockProperties.find(p => p.id === id);
    if (!property) {
      throw new Error('Property not found');
    }
    
    return property;
  },

  // Submit contact form
  async submitContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
  }) {
    await delay(1000); // Simulate network delay
    
    // Simulate form validation
    if (!data.name || !data.email || !data.message) {
      throw new Error('Please fill in all required fields');
    }

    // Simulate successful submission
    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    };
  },

  // Submit property inquiry
  async submitPropertyInquiry(propertyId: string, data: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }) {
    await delay(1000); // Simulate network delay

    // Simulate form validation
    if (!data.name || !data.email || !data.message) {
      throw new Error('Please fill in all required fields');
    }

    // Simulate successful submission
    return {
      success: true,
      message: 'Thank you for your inquiry. Our team will contact you shortly!'
    };
  }
};

export default api;
