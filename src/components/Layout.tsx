import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X, Phone, Calculator, Facebook, Instagram, Twitter } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  React.useEffect(() => {
    closeMenu();
  }, [location]);

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
            {pathnames.length > 0 && <span className="mx-2">/</span>}
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={name} className="flex items-center">
                {isLast ? (
                  <span className="text-gray-500">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                ) : (
                  <>
                    <Link to={routeTo} className="text-green-600 hover:text-green-800">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Link>
                    <span className="mx-2">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout size={32} />
            <span className="text-2xl font-bold">Jax Sod</span>
          </Link>
          <nav className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/about" className="hover:text-green-200">About Us</Link>
            <Link to="/services" className="hover:text-green-200">Sod Installation</Link>
            <Link to="/sod-types" className="hover:text-green-200">Sod Types</Link>
            <Link to="/lawn-calculators" className="hover:text-green-200">Calculators</Link>
            <Link to="/contact" className="hover:text-green-200">Contact Us</Link>
            <Link to="/faq" className="hover:text-green-200">FAQ</Link>
            <Link to="/blog" className="hover:text-green-200">Blog</Link>
            <Link to="/location" className="hover:text-green-200">Service Area</Link>
            <a href="tel:904-901-1457" className="bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-100 transition duration-300 flex items-center">
              <Phone className="mr-2" size={16} />
              904-901-1457
            </a>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-green-500 text-white">
          <nav className="container mx-auto px-4 py-2 flex flex-col">
            <Link to="/" className="py-2 hover:text-green-200">Home</Link>
            <Link to="/about" className="py-2 hover:text-green-200">About Us</Link>
            <Link to="/services" className="py-2 hover:text-green-200">Sod Installation</Link>
            <Link to="/sod-types" className="py-2 hover:text-green-200">Sod Types</Link>
            <Link to="/lawn-calculators" className="py-2 hover:text-green-200">Calculators</Link>
            <Link to="/contact" className="py-2 hover:text-green-200">Contact Us</Link>
            <Link to="/faq" className="py-2 hover:text-green-200">FAQ</Link>
            <Link to="/blog" className="py-2 hover:text-green-200">Blog</Link>
            <Link to="/location" className="py-2 hover:text-green-200">Service Area</Link>
            <a href="tel:904-901-1457" className="py-2 hover:text-green-200 flex items-center">
              <Phone className="mr-2" size={16} />
              904-901-1457
            </a>
          </nav>
        </div>
      )}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-4">
          {generateBreadcrumbs()}
          {children}
        </div>
      </main>
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Jax Sod</h3>
              <p>Your trusted sod installation experts in Jacksonville and St. Augustine for over 37 years.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-green-200">Home</Link></li>
                <li><Link to="/about" className="hover:text-green-200">About Us</Link></li>
                <li><Link to="/services" className="hover:text-green-200">Sod Installation</Link></li>
                <li><Link to="/location" className="hover:text-green-200">Service Area</Link></li>
                <li><Link to="/contact" className="hover:text-green-200">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-green-200">FAQ</Link></li>
                <li><Link to="/blog" className="hover:text-green-200">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Jacksonville, FL</p>
              <p className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a href="tel:904-901-1457" className="hover:text-green-200">904-901-1457</a>
              </p>
              <p>Email: info@jaxsod.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/jaxsod" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/jaxsod" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
                  <Instagram size={24} />
                </a>
                <a href="https://www.twitter.com/jaxsod" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Jax Sod. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;