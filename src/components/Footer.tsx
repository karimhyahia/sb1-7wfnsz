import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Über uns</h3>
            <p className="text-gray-400">
              Wir helfen Unternehmen dabei, ihre digitalen Produkte barrierefrei und zugänglich für alle zu gestalten.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-gray-400 hover:text-white">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-400 hover:text-white">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <a 
              href="https://mediaonearth.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              Besuche mediaonearth.com →
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Barrierefreie Website Check. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}