import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { EventList } from '../components/events/EventList';
import { useEventsStore } from '../store/eventsStore';
import { useAuthStore } from '../store/authStore';
import { DynamicBackground } from '../components/common/DynamicBackground';

export const Home: React.FC = () => {
  const { fetchEvents, filteredEvents, isLoading, error } = useEventsStore();
  const { isAuthenticated } = useAuthStore();

  // Section refs for background switching
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Section-based background switching
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sectionProgress, setSectionProgress] = useState<number[]>([]);
  const sectionRefs = [heroRef, featuresRef, eventsRef, aboutRef, contactRef];

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const progress = new Array(sectionRefs.length).fill(0);
      let maxRatio = 0;
      let visibleIndex = 0;
      
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          // Calculate how much of this section is visible (0-1)
          const ratio = entry.intersectionRatio;
          progress[idx] = ratio;
          
          if (ratio > maxRatio) {
            maxRatio = ratio;
            visibleIndex = idx;
          }
        }
      });
      
      setCurrentSectionIndex(visibleIndex);
      setSectionProgress(progress);
    };
    
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: '0px 0px -20% 0px', // More responsive triggering
    });
    
    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => observer.disconnect();
  }, [sectionRefs]);

  // Get featured events (first 6 events)
  const featuredEvents = filteredEvents.slice(0, 6);

  return (
    <DynamicBackground 
      currentSectionIndex={currentSectionIndex}
      sectionProgress={sectionProgress}
    >
      <div>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg mb-6 shadow-lg border-2 border-white/20">
                <span className="text-white font-bold text-xl tracking-wider">PE</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Discover Porsche Events
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Connect with fellow Porsche enthusiasts. Find car shows, track days, meets, and more in your area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/events">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-red-600 hover:bg-gray-100">
                  🏁 Browse Events
                </Button>
              </Link>
              {!isAuthenticated && (
                <Link to="/register">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 bg-red-600 text-white hover:bg-red-700">
                    🤝 Join Community
                  </Button>
                </Link>
              )}
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">500+</div>
                <div className="text-white/80">Events This Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">10K+</div>
                <div className="text-white/80">Enthusiasts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">50+</div>
                <div className="text-white/80">Cities</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-24 backdrop-blur-sm bg-[linear-gradient(135deg,_#f5f7ff_0%,_#e9effd_100%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Porsche Events?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your ultimate destination for Porsche community events and experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Local Events</h3>
                <p className="text-gray-600">
                  Discover Porsche events happening near you, from casual meets to professional track days.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect with Enthusiasts</h3>
                <p className="text-gray-600">
                  Meet fellow Porsche owners and enthusiasts who share your passion for these amazing cars.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-gray-600">
                  Get notified about new events, updates, and exclusive Porsche community news.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section ref={eventsRef} className="py-24 backdrop-blur-sm bg-[linear-gradient(135deg,_#f5f7ff_0%,_#e9effd_100%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Featured Events
                </h2>
                <p className="text-gray-600">
                  Check out these upcoming Porsche events
                </p>
              </div>
              <Link to="/events">
                <Button variant="outline">
                  View All Events
                </Button>
              </Link>
            </div>

            <EventList
              events={featuredEvents}
              loading={isLoading}
              error={error}
            />
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-24 backdrop-blur-sm bg-[linear-gradient(135deg,_#f5f7ff_0%,_#e9effd_100%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Porsche Events
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're passionate about bringing Porsche enthusiasts together. Our platform connects owners, 
                collectors, and fans through carefully curated events that celebrate the heritage and 
                performance of these iconic vehicles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  From Classic to Modern
                </h3>
                <p className="text-gray-600 mb-6">
                  Whether you own a classic 356, a modern 911, or dream of owning your first Porsche, 
                  our community welcomes all enthusiasts. We celebrate the entire Porsche family - 
                  from vintage beauties to cutting-edge electric vehicles.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Track days and performance events</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Car shows and concours events</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Social meets and networking</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-white font-bold text-4xl">PE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={contactRef} className="py-24 backdrop-blur-sm bg-[linear-gradient(135deg,_#f5f7ff_0%,_#e9effd_100%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join the Porsche Community?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Create an account to start discovering and attending amazing Porsche events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                  Get Started
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="outline" size="lg">
                  Browse Events
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </DynamicBackground>
  );
}; 