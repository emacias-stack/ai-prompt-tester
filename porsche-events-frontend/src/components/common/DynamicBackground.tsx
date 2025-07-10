import React from 'react';

interface BackgroundImage {
  src: string;
  alt: string;
  section: string;
}

const backgroundImages: BackgroundImage[] = [
  {
    src: '/backgrounds/white-porsche-911-road.jpg',
    alt: 'White Porsche 911 on road',
    section: 'hero'
  }
//   {
//     src: '/backgrounds/silver-porsche-911-side-road.jpg',
//     alt: 'Silver Porsche 911 on side of road',
//     section: 'events'
//   },
//   {
//     src: '/backgrounds/porsche-emblem-closeup.jpg',
//     alt: 'Porsche emblem close-up',
//     section: 'features'
//   },
//   {
//     src: '/backgrounds/black-porsche-911-parking.jpg',
//     alt: 'Black Porsche 911 in parking lot',
//     section: 'about'
//   },
//   {
//     src: '/backgrounds/vintage-porsche-356-speedster.jpg',
//     alt: 'Vintage Porsche 356 C Speedster',
//     section: 'contact'
//   }
];

interface DynamicBackgroundProps {
  children: React.ReactNode;
  currentSectionIndex: number;
  sectionProgress?: number[];
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ 
  children, 
  currentSectionIndex, 
  sectionProgress = [] 
}) => {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="fixed top-0 left-0 w-full h-screen z-0" style={{ pointerEvents: 'none' }}>
        {backgroundImages.map((image, index) => {
          // Calculate opacity based on section progress
          let opacity = 0;
          
          if (sectionProgress.length > 0) {
            // Use the progress of this section
            opacity = sectionProgress[index] || 0;
            
            // Add some crossfade effect - if this section is becoming visible
            // while another is fading out, show some of this image
            if (index === currentSectionIndex && opacity > 0.1) {
              opacity = Math.max(opacity, 0.3); // Minimum visibility for current section
            }
            
            // If this is the previous section and we're transitioning away
            if (index === currentSectionIndex - 1 && opacity < 0.5) {
              opacity = Math.max(opacity * 0.5, 0); // Fade out previous section
            }
          } else {
            // Fallback to simple on/off if no progress data
            opacity = index === currentSectionIndex ? 1 : 0;
          }
          
          return (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ 
                opacity,
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: 'none'
              }}
            />
          );
        })}
        
        {/* Dynamic overlay based on current section */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            opacity: sectionProgress.length > 0 ? 
              Math.max(0.3, 1 - (sectionProgress[currentSectionIndex] || 0) * 0.3) : 0.6,
            transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: 'none'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}; 