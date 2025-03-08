import React from 'react';
import PropertyCard from './PropertyCard';
import { mockProperties } from '../../data/mockProperties';

interface PropertyListProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  properties?: typeof mockProperties;
}

const PropertyList: React.FC<PropertyListProps> = ({
  title = "Featured Properties",
  subtitle = "Discover our handpicked selection of premium properties",
  limit,
  properties,
}) => {
  const data = properties || mockProperties;
  const displayProperties = limit ? data.slice(0, limit) : data;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>

        {/* Show More Button (if limited) */}
        {limit && data.length > limit && (
          <div className="text-center mt-12">
            <button
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              onClick={() => {
                // TODO: Implement view all properties
              }}
            >
              View All Properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyList;
