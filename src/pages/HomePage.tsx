import React, { useState, useEffect } from 'react';
import { MapPin, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExplorationMode } from '../types';

const slides = [
  {
    url: "https://digital.ihg.com/is/image/ihg/intercontinental-paris-7596881385-2x1"
  },
  {
    url: "https://www.studying-in-uk.org/wp-content/uploads/2019/05/study-in-london-1068x641.jpg"
  },
  {
    url: "https://media.vacalia.com/poi/reformat/1024/768/poi_1454_db2c7cfb8481c7af287d8992515c8426.webp?v=21092023"
  },
  {
    url: "https://www.solosophie.com/wp-content/uploads/2023/05/Chefchaouen_1399247843.jpeg"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/1e/da/2c/ermitage-d-akchour.jpg?w=900&h=-1&s=1"
  }
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mode, setMode] = useState<ExplorationMode>('place');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col">
      {/* Image Slider */}
      <div className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
          </div>
        ))}
        
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-y border-slate-200 py-4">
        <div className="container mx-auto px-4">
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
        </div>
      </nav>

      {/* Mode Selection */}
      <div className="container mx-auto px-4 py-6 flex justify-center space-x-4">
        <button 
          className={`flex items-center px-6 py-3 rounded-md transition-colors ${
            mode === 'place' 
              ? 'bg-blue-600 text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
          onClick={() => setMode('place')}
        >
          <MapPin size={20} className="mr-2" />
          <span>Explore Places</span>
        </button>
        <button 
          className={`flex items-center px-6 py-3 rounded-md transition-colors ${
            mode === 'activity' 
              ? 'bg-blue-600 text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
          onClick={() => setMode('activity')}
        >
          <Activity size={20} className="mr-2" />
          <span>Find Activities</span>
        </button>
      </div>

      {/* Featured Places */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Featured Places</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Cards */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg"
                alt="Eiffel Tower"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Eiffel Tower</h3>
                <p className="text-white/90 text-sm">Paris, France</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-slate-600 text-sm mb-3">
                Iconic iron lattice tower on the Champ de Mars, symbol of Paris and France.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Landmark</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Architecture</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Tourism</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg"
                alt="Louvre Museum"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Louvre Museum</h3>
                <p className="text-white/90 text-sm">Paris, France</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-slate-600 text-sm mb-3">
                World's largest art museum and home to many famous works including the Mona Lisa.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Art</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Museum</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Culture</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg"
                alt="Colosseum"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Colosseum</h3>
                <p className="text-white/90 text-sm">Rome, Italy</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-slate-600 text-sm mb-3">
                Ancient amphitheater in the heart of Rome, an iconic symbol of the Roman Empire.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Historical</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Architecture</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Tourism</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;