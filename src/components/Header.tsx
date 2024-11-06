import React from 'react';
import { Code2 } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToChecker: true } });
    } else {
      const checkerElement = document.getElementById('checker');
      if (checkerElement) {
        checkerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <Code2 className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Barrierefreie Website Check</h1>
              <p className="text-sm text-teal-100">BFSG Compliance Checker 2025</p>
            </div>
          </Link>
          <a
            href="#checker"
            onClick={handleNavigation}
            className="inline-flex items-center px-6 py-2 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-teal-700 transition-colors"
          >
            Jetzt checken
          </a>
        </div>
      </div>
    </header>
  );
}