import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search the site..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 px-4 pr-10 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full text-gray-800 bg-white"
          aria-label="Search blog posts"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-3 text-green-600 hover:text-green-800"
          aria-label="Submit search"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
