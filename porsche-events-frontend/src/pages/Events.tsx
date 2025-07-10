import React, { useEffect, useState } from 'react';
import { EventList } from '../components/events/EventList';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Card } from '../components/common/Card';
import { useEventsStore } from '../store/eventsStore';
import { eventCategories, eventTypes } from '../data/mockData';
import type { EventCategory, EventType } from '../types';

export const Events: React.FC = () => {
  const {
    fetchEvents,
    filteredEvents,
    isLoading,
    error,
    filterEvents,
    clearFilters,
    filters
  } = useEventsStore();

  const [searchQuery, setSearchQuery] = useState(filters.query || '');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | ''>(filters.category || '');
  const [selectedEventType, setSelectedEventType] = useState<EventType | ''>(filters.eventType || '');
  const [showFreeOnly, setShowFreeOnly] = useState(filters.isFree || false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterEvents({ query: searchQuery });
  };

  const handleCategoryChange = (category: EventCategory | '') => {
    setSelectedCategory(category);
    filterEvents({ category: category || undefined });
  };

  const handleEventTypeChange = (eventType: EventType | '') => {
    setSelectedEventType(eventType);
    filterEvents({ eventType: eventType || undefined });
  };

  const handleFreeOnlyChange = (checked: boolean) => {
    setShowFreeOnly(checked);
    filterEvents({ isFree: checked });
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedEventType('');
    setShowFreeOnly(false);
    clearFilters();
  };

  const handleAttend = (eventId: string) => {
    // Mock attendance functionality
    console.log('Attending event:', eventId);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-lg mb-4 shadow-lg border-2 border-white/20">
            <span className="text-white font-bold text-lg tracking-wider">PE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Porsche Events
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Discover amazing Porsche events in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search events by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                />
              </div>
              <Button type="submit">Search</Button>
            </div>
          </form>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </Button>

            {(selectedCategory || selectedEventType || showFreeOnly || searchQuery) && (
              <Button variant="ghost" onClick={handleClearFilters}>
                Clear Filters
              </Button>
            )}
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <Card className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Category
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value=""
                        checked={selectedCategory === ''}
                        onChange={() => handleCategoryChange('')}
                        className="mr-2"
                      />
                      All Categories
                    </label>
                    {eventCategories.map((category) => (
                      <label key={category.value} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category.value}
                          checked={selectedCategory === category.value}
                          onChange={() => handleCategoryChange(category.value)}
                          className="mr-2"
                        />
                        <span className="mr-2">{category.icon}</span>
                        {category.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Event Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="eventType"
                        value=""
                        checked={selectedEventType === ''}
                        onChange={() => handleEventTypeChange('')}
                        className="mr-2"
                      />
                      All Types
                    </label>
                    {eventTypes.map((type) => (
                      <label key={type.value} className="flex items-center">
                        <input
                          type="radio"
                          name="eventType"
                          value={type.value}
                          checked={selectedEventType === type.value}
                          onChange={() => handleEventTypeChange(type.value)}
                          className="mr-2"
                        />
                        {type.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={showFreeOnly}
                        onChange={(e) => handleFreeOnlyChange(e.target.checked)}
                        className="mr-2"
                      />
                      Free Events Only
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {isLoading ? 'Loading...' : `${filteredEvents.length} events found`}
          </p>
        </div>

        {/* Events List */}
        <EventList
          events={filteredEvents}
          loading={isLoading}
          error={error}
          onAttend={handleAttend}
        />

        {/* Event Categories Overview */}
        <section className="mt-16 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories.map((category) => (
              <div key={category.value} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.label}</h3>
                <p className="text-sm text-gray-600">
                  {category.value === 'track-day' && 'Performance driving and track days'}
                  {category.value === 'car-show' && 'Car shows and exhibitions'}
                  {category.value === 'meet' && 'Social gatherings and meets'}
                  {category.value === 'rally' && 'Rally events and road trips'}
                  {category.value === 'conference' && 'Educational workshops and seminars'}
                  {category.value === 'auction' && 'Auction events and sales'}
                  {category.value === 'other' && 'Other special events'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Event Types */}
        <section className="mt-8 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Event Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventTypes.map((type) => (
              <div key={type.value} className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">{type.label.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{type.label}</h3>
                  <p className="text-sm text-gray-600">
                    {type.value === 'porsche-only' && 'Exclusive to Porsche vehicles'}
                    {type.value === 'mixed-brands' && 'Open to all car brands'}
                    {type.value === 'vintage' && 'Classic and vintage vehicles'}
                    {type.value === 'modern' && 'Modern and contemporary vehicles'}
                    {type.value === 'racing' && 'Competitive racing events'}
                    {type.value === 'social' && 'Social networking events'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-red-100 mb-6">
            Create your own Porsche event and share it with the community!
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Create Event
          </Button>
        </section>
      </div>
    </div>
  );
}; 