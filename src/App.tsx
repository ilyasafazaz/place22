import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Globe, Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import PlacesSidebar from './components/PlacesSidebar';
import HealthPage from './pages/HealthPage';
import { ExplorationMode } from './types';

function App() {
  const [mode, setMode] = useState<ExplorationMode>('place');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPlacesSidebarOpen, setIsPlacesSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md bg-white shadow-md hover:bg-slate-50 transition-colors"
          >
            <Menu size={24} className="text-slate-700" />
          </button>
        </div>

        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsPlacesSidebarOpen(true)}
            className="p-2 rounded-md bg-white shadow-md hover:bg-slate-50 transition-colors"
          >
            <Globe size={24} className="text-slate-700" />
          </button>
        </div>
        
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        <PlacesSidebar
          isOpen={isPlacesSidebarOpen}
          onClose={() => setIsPlacesSidebarOpen(false)}
        />
        
        <nav className="bg-white border-b border-slate-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">Place</span>
                <span className="text-2xl font-bold text-slate-800">2</span>
              </div>
              <ul className="flex justify-center space-x-8">
                <li>
                  <Link to="/health" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Health
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="/entertainment" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link to="/sports" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link to="/culture" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link to="/business" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Business
                  </Link>
                </li>
              </ul>
              <div className="flex gap-4">
                <button className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors">
                  Login
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <div className="p-8 text-center">
                <h1 className="text-3xl font-bold text-slate-800">Welcome to Place2</h1>
                <p className="mt-4 text-slate-600">Discover amazing places and activities around you</p>
              </div>
            } />
            <Route path="/health" element={<HealthPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>

        <footer className="bg-white border-t border-slate-200 py-4 px-6 flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Globe size={18} />
            <span>Place2 © 2025</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;