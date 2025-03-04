import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { api } from '../services/api';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);

  const { data: property, error, isLoading } = useQuery(['property', id], () => {
    if (id) {
      return api.getProperty(id);
    }
    throw new Error('Property ID is undefined');
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading property details.</div>;

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Property Not Found
        </h1>
        <p className="text-gray-600">
          The property you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  const images = [
    property.imageUrl,
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
  ];

  const amenities = [
    'Air Conditioning',
    'Central Heating',
    'Swimming Pool',
    'Garden',
    'Garage',
    'Security System',
    'High-Speed Internet',
    'Modern Kitchen'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src={images[activeImage]}
                alt={property.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-4 py-2 rounded-full text-white ${
                  property.status === 'AVAILABLE' ? 'bg-green-500' :
                  property.status === 'SOLD' ? 'bg-red-500' : 'bg-blue-500'
                }`}>
                  {property.status}
                </span>
              </div>
            </div>

            {/* Property Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {property.title}
              </h1>
              <p className="text-xl text-primary font-bold mb-4">
                ${property.price.toLocaleString()}
              </p>
              <p className="text-gray-600 mb-6">
                {property.location}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-600">Bedrooms</p>
                  <p className="text-xl font-bold text-gray-900">{property.bedrooms}</p>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-600">Bathrooms</p>
                  <p className="text-xl font-bold text-gray-900">{property.bathrooms}</p>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-600">Area</p>
                  <p className="text-xl font-bold text-gray-900">{property.area} sqft</p>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative h-20 ${activeImage === index ? 'ring-2 ring-primary' : ''}`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Amenities */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Property Description
            </h2>
            <p className="text-gray-600 mb-6">
              This stunning property offers luxurious living in a prime location. 
              Featuring modern architecture and high-end finishes throughout, 
              this home provides the perfect blend of comfort and sophistication.
            </p>
            <p className="text-gray-600">
              The spacious layout includes an open-concept living area, 
              gourmet kitchen with premium appliances, and a private master suite. 
              The property also boasts beautiful landscaping and outdoor living spaces.
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Amenities
            </h2>
            <ul className="grid grid-cols-1 gap-2">
              {amenities.map((amenity, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Interested in this property?
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
