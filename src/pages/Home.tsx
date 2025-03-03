import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_CONTENT, FEATURES } from '../constants/content';
import PropertyList from '../components/property/PropertyList';
import SearchBar from '../components/search/SearchBar';

const Home = () => {
  const handleSearch = (query: string) => {
    console.log('Searching:', query);
    // TODO: Implement search functionality
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {HERO_CONTENT.subtitle}
            </p>
            <div className="max-w-2xl mx-auto">
              <SearchBar 
                onSearch={handleSearch}
                showAdvanced={true}
                className="bg-white rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <PropertyList 
        title="Featured Properties"
        subtitle="Discover our handpicked selection of premium properties"
        limit={6}
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {FEATURES.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {FEATURES.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.items.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you discover the perfect property that matches your lifestyle and preferences.
          </p>
          <Link 
            to="/properties"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse All Properties
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
