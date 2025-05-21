import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Globe, Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import PlacesSidebar from './components/PlacesSidebar';
import HomePage from './pages/HomePage';
import HealthPage from './pages/HealthPage';
import { ExplorationMode } from './types';

function App() {
  const [mode, setMode] = useState<ExplorationMode>('place');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPlacesSidebarOpen, setIsPlacesSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-slate-50 transition-colors"
              >
                <Menu size={24} className="text-slate-700" />
              </button>
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">Place</span>
                <span className="text-2xl font-bold text-slate-800">2</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
              <button
                onClick={() => setIsPlacesSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-slate-50 transition-colors"
              >
                <Globe size={24} className="text-slate-700" />
              </button>
            </div>
          </div>
        </div>
        
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        <PlacesSidebar
          isOpen={isPlacesSidebarOpen}
          onClose={() => setIsPlacesSidebarOpen(false)}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
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