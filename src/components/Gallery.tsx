
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1545083036-3173dd55fe04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1613252026350-62849d59a927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  ];
  
  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Apartment Gallery</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Take a virtual tour of our beautiful seaside apartment and imagine your perfect vacation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={src} 
                alt={`Apartment gallery image ${index + 1}`} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft size={48} />
          </button>
          
          <img 
            src={images[currentImage]} 
            alt={`Gallery full-size image ${currentImage + 1}`} 
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />
          
          <button 
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
