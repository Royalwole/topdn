import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAVIGATION, PLACEHOLDER_IMAGES, SOCIAL_LINKS } from '../../constants/content';
import SearchBar from '../search/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log('Searching for:', query);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm hover:text-gray-200">
              <span className="mr-2">📞</span> {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm hover:text-gray-200">
              <span className="mr-2">✉️</span> {COMPANY_INFO.email}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-200">
              Facebook
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-200">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            {/* Logo */}
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src={PLACEHOLDER_IMAGES.logo} 
                  alt={COMPANY_INFO.name}
                  className="h-10 w-auto"
                />
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-primary">{COMPANY_INFO.name}</h1>
                  <p className="text-xs text-gray-600">{COMPANY_INFO.slogan}</p>
                </div>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Search and Navigation */}
            <div className="hidden md:flex flex-1 items-center justify-between">
              {/* Search Bar */}
              <div className="flex-1 max-w-2xl mx-4">
                <SearchBar 
                  onSearch={handleSearch}
                  showAdvanced={true}
                />
              </div>

              {/* Navigation Links */}
              <div className="flex items-center space-x-8">
                {NAVIGATION.main.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <SearchBar 
                  onSearch={handleSearch}
                  showAdvanced={true}
                  className="w-full"
                />
              </div>

              {/* Mobile Navigation Links */}
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-gray-700 hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <a href={`tel:${COMPANY_INFO.phone}`} className="block text-gray-600 py-2">
                  <span className="mr-2">📞</span> {COMPANY_INFO.phone}
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="block text-gray-600 py-2">
                  <span className="mr-2">✉️</span> {COMPANY_INFO.email}
                </a>
                <div className="flex space-x-4 pt-2">
                  <a 
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary"
                  >
                    Facebook
                  </a>
                  <a 
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
