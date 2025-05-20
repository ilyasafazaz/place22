import React, { useState } from 'react';
import { Globe, Menu } from 'lucide-react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import PlacesSidebar from './components/PlacesSidebar';
import { ExplorationMode } from './types';

function App() {
  const [mode, setMode] = useState<ExplorationMode>('place');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPlacesSidebarOpen, setIsPlacesSidebarOpen] = useState(false);

  return (
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
      
      <Header 
        mode={mode} 
        setMode={setMode} 
      />
      
      <div className="flex-1 overflow-hidden">
        <MainContent mode={mode} />
      </div>

      {/* Footer */}
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
  );
}

export default App;