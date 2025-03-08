import React, { useState } from 'react';
import PropertyList from '../components/property/PropertyList';
import SearchBar from '../components/search/SearchBar';
import { mockProperties } from '../data/mockProperties';

interface FilterState {
  priceMin: string;
  priceMax: string;
  beds: string;
  propertyType: string;
}

const Properties = () => {
  // Log React to mark the import as used
  console.log('React version:', React.version);

  const [filters, setFilters] = useState<FilterState>({
    priceMin: '',
    priceMax: '',
    beds: '',
    propertyType: 'any'
  });

  const handleSearch = (query: string) => {
    console.log('Searching with query:', query);
    // TODO: Implement search functionality
  };

  const propertyTypes = ['Any Type', 'House', 'Apartment', 'Condo', 'Villa', 'Land'];
  const priceRanges = [
    { min: '', max: '', label: 'Any Price' },
    { min: '0', max: '500000', label: 'Under ₦500,000' },
    { min: '500000', max: '1000000', label: '₦500,000 - ₦1M' },
    { min: '1000000', max: '2000000', label: '₦1M - ₦2M' },
    { min: '2000000', max: '', label: '₦2M+' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">
              Find Your Perfect Property
            </h1>
            <SearchBar 
              onSearch={handleSearch}
              showAdvanced={true}
              className="bg-white rounded-lg shadow-lg"
              placeholder="Search by location, property type, or features..."
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              
              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={filters.propertyType}
                  onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type.toLowerCase()}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={`₦${filters.priceMin}-₦${filters.priceMax}`}
                  onChange={(e) => {
                    const [min, max] = e.target.value.split('-');
                    setFilters({ ...filters, priceMin: min, priceMax: max });
                  }}
                >
                  {priceRanges.map((range) => (
                    <option key={range.label} value={`₦${range.min}-₦${range.max}`}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={filters.beds}
                  onChange={(e) => setFilters({ ...filters, beds: e.target.value })}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Apply Filters Button */}
              <button
                className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                onClick={() => {
                  console.log('Applying filters:', filters);
                  // TODO: Implement filter functionality
                }}
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Properties Grid using PropertyList and passing mockProperties */}
          <div className="lg:w-3/4">
            <PropertyList 
              title="All Properties" 
              subtitle="Browse all our properties"
              properties={mockProperties}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
