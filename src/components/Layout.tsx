import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Menu, X, Phone } from 'lucide-react';
import Footer from './Footer';
import SearchBar from './SearchBar';
import ScrollToTop from './ScrollToTop';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x: string) => x);
    return (
      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
            {pathnames.length > 0 && <span className="mx-2">/</span>}
          </li>
          {pathnames.map((name: string, index: number) => {
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
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout size={32} />
              <span className="text-xl md:text-2xl font-bold">Jax Sod</span>
            </Link>
          </div>
          <div className="hidden md:block w-1/3 mx-4">
            <SearchBar />
          </div>
          <nav className="hidden md:flex space-x-2 lg:space-x-4 items-center">
            <Link to="/" className="px-2 py-1 hover:text-green-200">Home</Link>
            <Link to="/about" className="px-2 py-1 hover:text-green-200">About Us</Link>
            <Link to="/services" className="px-2 py-1 hover:text-green-200">Sod Installation</Link>
            <Link to="/sod-types" className="px-2 py-1 hover:text-green-200">Sod Types</Link>
            <Link to="/lawn-calculators" className="px-2 py-1 hover:text-green-200">Calculators</Link>
            <Link to="/contact" className="px-2 py-1 hover:text-green-200">Contact Us</Link>
            <Link to="/faq" className="px-2 py-1 hover:text-green-200">FAQ</Link>
            <Link to="/blog" className="px-2 py-1 hover:text-green-200">Blog</Link>
            <Link to="/location" className="px-2 py-1 hover:text-green-200">Service Area</Link>
            <a href="tel:904-901-1457" className="bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-100 transition duration-300 flex items-center">
              <Phone className="mr-2" size={16} />
              904-901-1457
            </a>
          </nav>
          <button 
            className="md:hidden p-2 rounded-lg touch-manipulation" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-green-500 text-white fixed top-[62px] left-0 right-0 z-50 max-h-[calc(100vh-62px)] overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <SearchBar />
          </div>
          <nav className="container mx-auto px-4 pb-4 flex flex-col">
            <Link to="/" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200">Home</Link>
            <Link to="/about" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200">About Us</Link>
            <Link to="/services" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200">Sod Installation</Link>
            <Link to="/sod-types" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200">Sod Types</Link>
            <Link to="/lawn-calculators" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200">Calculators</Link>
            <Link to="/contact" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200">Contact Us</Link>
            <Link to="/faq" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200">FAQ</Link>
            <Link to="/blog" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200">Blog</Link>
            <Link to="/location" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200">Service Area</Link>
            <a href="tel:904-901-1457" className="py-3 px-2 touch-manipulation hover:bg-green-600 rounded-md hover:text-green-200 flex items-center">
              <Phone className="mr-2" size={20} />
              904-901-1457
            </a>
          </nav>
        </div>
      )}
      <main className="flex-grow container mx-auto px-4 py-4">
        {location.pathname !== '/' && generateBreadcrumbs()}
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
