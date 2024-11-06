import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BFSGChecker from './components/BFSGChecker';
import BlogPost from './pages/BlogPost';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function ScrollToChecker() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToChecker) {
      const checkerElement = document.getElementById('checker');
      if (checkerElement) {
        checkerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <ScrollToChecker />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <BlogPost />
              <div className="mt-16" id="checker">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    BFSG Compliance Checker
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Prüfe kostenlos, ob dein Unternehmen von den neuen Anforderungen des 
                    Barrierefreiheitsstärkungsgesetzes betroffen ist.
                  </p>
                </div>
                <BFSGChecker />
              </div>
            </div>
          } />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}