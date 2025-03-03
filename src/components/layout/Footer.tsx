import { Link } from 'react-router-dom';
import { COMPANY_INFO, FOOTER_CONTENT, SOCIAL_LINKS } from '../../constants/content';
import type { FooterLink } from '../../types';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
            <p className="text-gray-400">{FOOTER_CONTENT.about}</p>
            <div className="space-y-2">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                📞 {COMPANY_INFO.phone}
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                ✉️ {COMPANY_INFO.email}
              </a>
              <p className="text-gray-400">
                🏢 {COMPANY_INFO.address}
              </p>
              <p className="text-gray-400">
                🕒 {COMPANY_INFO.workingHours}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_CONTENT.quickLinks.map((link: FooterLink) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">{FOOTER_CONTENT.newsletter.title}</h3>
            <p className="text-gray-400 mb-4">
              {FOOTER_CONTENT.newsletter.description}
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full md:w-auto"
              >
                {FOOTER_CONTENT.newsletter.buttonText}
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              {FOOTER_CONTENT.copyright.replace('2024', currentYear.toString())}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
