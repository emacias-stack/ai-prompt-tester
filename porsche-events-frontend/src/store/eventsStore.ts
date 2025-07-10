import { create } from 'zustand';
import type { Event, SearchFilters } from '../types';
import { mockEvents, searchEvents, getEventsByCategory, getEventsByLocation } from '../data/mockData';

interface EventsState {
  events: Event[];
  filteredEvents: Event[];
  selectedEvent: Event | null;
  isLoading: boolean;
  error: string | null;
  filters: SearchFilters;
}

interface EventsStore extends EventsState {
  fetchEvents: () => Promise<void>;
  fetchEventById: (id: string) => Promise<void>;
  searchEvents: (query: string) => void;
  filterEvents: (filters: Partial<SearchFilters>) => void;
  clearFilters: () => void;
  setSelectedEvent: (event: Event | null) => void;
  clearError: () => void;
}

export const useEventsStore = create<EventsStore>((set, get) => ({
  events: [],
  filteredEvents: [],
  selectedEvent: null,
  isLoading: false,
  error: null,
  filters: {},

  fetchEvents: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      set({
        events: mockEvents,
        filteredEvents: mockEvents,
        isLoading: false
      });
    } catch (error) {
      set({
        isLoading: false,
        error: 'Failed to fetch events'
      });
    }
  },

  fetchEventById: async (id: string) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const event = mockEvents.find(e => e.id === id);
      
      if (event) {
        set({
          selectedEvent: event,
          isLoading: false
        });
      } else {
        set({
          error: 'Event not found',
          isLoading: false
        });
      }
    } catch (error) {
      set({
        isLoading: false,
        error: 'Failed to fetch event'
      });
    }
  },

  searchEvents: (query: string) => {
    const { events } = get();
    const results = searchEvents(query);
    
    set({
      filteredEvents: results,
      filters: { ...get().filters, query }
    });
  },

  filterEvents: (newFilters: Partial<SearchFilters>) => {
    const { events } = get();
    const currentFilters = get().filters;
    const updatedFilters = { ...currentFilters, ...newFilters };
    
    let filtered = events;
    
    // Apply search query
    if (updatedFilters.query) {
      filtered = searchEvents(updatedFilters.query);
    }
    
    // Apply category filter
    if (updatedFilters.category) {
      filtered = filtered.filter(event => event.category === updatedFilters.category);
    }
    
    // Apply event type filter
    if (updatedFilters.eventType) {
      filtered = filtered.filter(event => event.eventType === updatedFilters.eventType);
    }
    
    // Apply location filter
    if (updatedFilters.location) {
      filtered = getEventsByLocation(updatedFilters.location);
    }
    
    // Apply date filters
    if (updatedFilters.startDate) {
      filtered = filtered.filter(event => new Date(event.startDate) >= new Date(updatedFilters.startDate!));
    }
    
    if (updatedFilters.endDate) {
      filtered = filtered.filter(event => new Date(event.endDate) <= new Date(updatedFilters.endDate!));
    }
    
    // Apply free/paid filter
    if (updatedFilters.isFree !== undefined) {
      filtered = filtered.filter(event => event.isFree === updatedFilters.isFree);
    }
    
    set({
      filteredEvents: filtered,
      filters: updatedFilters
    });
  },

  clearFilters: () => {
    const { events } = get();
    set({
      filteredEvents: events,
      filters: {}
    });
  },

  setSelectedEvent: (event: Event | null) => {
    set({ selectedEvent: event });
  },

  clearError: () => {
    set({ error: null });
  }
})); 