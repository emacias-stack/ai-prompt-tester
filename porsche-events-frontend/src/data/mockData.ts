import type { Event, User, Review, EventCategory, EventType } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    profileImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Porsche enthusiast since 2010. Owner of a 911 Carrera S and 718 Cayman.',
    location: 'Los Angeles, CA',
    preferences: {
      favoriteModels: ['911', '718', 'Cayenne'],
      notificationSettings: { email: true, push: true },
      locationRadius: 50
    },
    isVerified: true,
    isAdmin: false,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    email: 'sarah.smith@example.com',
    firstName: 'Sarah',
    lastName: 'Smith',
    profileImageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Vintage Porsche collector and restorer. Specializing in 356 models.',
    location: 'San Francisco, CA',
    preferences: {
      favoriteModels: ['356', '911', '912'],
      notificationSettings: { email: true, push: false },
      locationRadius: 100
    },
    isVerified: true,
    isAdmin: true,
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    email: 'mike.wilson@example.com',
    firstName: 'Mike',
    lastName: 'Wilson',
    profileImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Track day enthusiast and Porsche Club member.',
    location: 'Miami, FL',
    preferences: {
      favoriteModels: ['911 GT3', '718 GT4', 'Cayman'],
      notificationSettings: { email: false, push: true },
      locationRadius: 75
    },
    isVerified: true,
    isAdmin: false,
    createdAt: '2024-01-20T09:15:00Z',
    updatedAt: '2024-01-20T09:15:00Z'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Porsche 911 Meet & Greet',
    description: 'Join fellow Porsche enthusiasts for a casual meet and greet. All 911 models welcome! Show off your ride, share stories, and connect with the community.',
    location: 'Santa Monica Pier, Los Angeles, CA',
    latitude: 34.0195,
    longitude: -118.4912,
    startDate: '2024-02-15T18:00:00Z',
    endDate: '2024-02-15T21:00:00Z',
    category: 'meet',
    eventType: 'porsche-only',
    organizerId: '1',
    organizer: mockUsers[0],
    maxAttendees: 50,
    currentAttendees: 23,
    isFree: true,
    imageUrls: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
    ],
    tags: ['911', 'meet', 'social', 'los-angeles'],
    status: 'active',
    createdAt: '2024-01-25T12:00:00Z',
    updatedAt: '2024-01-25T12:00:00Z'
  },
  {
    id: '2',
    title: 'Vintage Porsche Show 2024',
    description: 'Annual vintage Porsche show featuring classic models from the 356 to early 911s. Awards, food, and live music. Pre-1975 models only.',
    location: 'Golden Gate Park, San Francisco, CA',
    latitude: 37.7694,
    longitude: -122.4862,
    startDate: '2024-03-10T10:00:00Z',
    endDate: '2024-03-10T17:00:00Z',
    category: 'car-show',
    eventType: 'vintage',
    organizerId: '2',
    organizer: mockUsers[1],
    maxAttendees: 200,
    currentAttendees: 156,
    isFree: false,
    ticketPrice: 25.00,
    imageUrls: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop'
    ],
    tags: ['vintage', '356', '911', 'classic', 'awards'],
    status: 'active',
    createdAt: '2024-01-15T15:30:00Z',
    updatedAt: '2024-01-15T15:30:00Z'
  },
  {
    id: '3',
    title: 'Track Day - Porsche Only',
    description: 'Exclusive track day for Porsche owners. Professional instruction available. Helmets required. Limited to 30 participants.',
    location: 'Laguna Seca Raceway, Monterey, CA',
    latitude: 36.5844,
    longitude: -121.7539,
    startDate: '2024-02-28T08:00:00Z',
    endDate: '2024-02-28T17:00:00Z',
    category: 'track-day',
    eventType: 'racing',
    organizerId: '3',
    organizer: mockUsers[2],
    maxAttendees: 30,
    currentAttendees: 28,
    isFree: false,
    ticketPrice: 350.00,
    imageUrls: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop'
    ],
    tags: ['track', 'racing', 'instruction', 'laguna-seca'],
    status: 'active',
    createdAt: '2024-01-20T10:45:00Z',
    updatedAt: '2024-01-20T10:45:00Z'
  },
  {
    id: '4',
    title: 'Porsche Cars & Coffee',
    description: 'Monthly Cars & Coffee meetup for Porsche enthusiasts. Coffee, donuts, and great cars. All Porsche models welcome.',
    location: 'The Grove, Los Angeles, CA',
    latitude: 34.0722,
    longitude: -118.3587,
    startDate: '2024-02-03T07:00:00Z',
    endDate: '2024-02-03T10:00:00Z',
    category: 'meet',
    eventType: 'social',
    organizerId: '1',
    organizer: mockUsers[0],
    maxAttendees: 100,
    currentAttendees: 67,
    isFree: true,
    imageUrls: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop'
    ],
    tags: ['cars-and-coffee', 'social', 'monthly', 'the-grove'],
    status: 'active',
    createdAt: '2024-01-22T16:20:00Z',
    updatedAt: '2024-01-22T16:20:00Z'
  },
  {
    id: '5',
    title: 'Porsche Auction - Rare Models',
    description: 'Auction featuring rare and collectible Porsche models. Preview day available. Registration required for bidding.',
    location: 'Petersen Automotive Museum, Los Angeles, CA',
    latitude: 34.0624,
    longitude: -118.3614,
    startDate: '2024-03-20T14:00:00Z',
    endDate: '2024-03-20T20:00:00Z',
    category: 'auction',
    eventType: 'vintage',
    organizerId: '2',
    organizer: mockUsers[1],
    maxAttendees: 150,
    currentAttendees: 89,
    isFree: false,
    ticketPrice: 50.00,
    imageUrls: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop'
    ],
    tags: ['auction', 'rare', 'collectible', 'petersen-museum'],
    status: 'active',
    createdAt: '2024-01-18T11:15:00Z',
    updatedAt: '2024-01-18T11:15:00Z'
  },
  {
    id: '6',
    title: 'Porsche Rally - Pacific Coast',
    description: '3-day rally along the Pacific Coast Highway. Scenic routes, overnight stops, and group activities. All Porsche models welcome.',
    location: 'San Francisco to Los Angeles, CA',
    latitude: 36.7783,
    longitude: -119.4179,
    startDate: '2024-04-15T08:00:00Z',
    endDate: '2024-04-17T18:00:00Z',
    category: 'rally',
    eventType: 'mixed-brands',
    organizerId: '3',
    organizer: mockUsers[2],
    maxAttendees: 40,
    currentAttendees: 31,
    isFree: false,
    ticketPrice: 200.00,
    imageUrls: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
    ],
    tags: ['rally', 'pacific-coast', 'multi-day', 'scenic'],
    status: 'active',
    createdAt: '2024-01-12T13:45:00Z',
    updatedAt: '2024-01-12T13:45:00Z'
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: '2',
    user: mockUsers[1],
    eventId: '1',
    rating: 5,
    comment: 'Great event! Met some amazing people and saw some beautiful 911s. Will definitely attend again.',
    createdAt: '2024-01-26T14:30:00Z',
    updatedAt: '2024-01-26T14:30:00Z'
  },
  {
    id: '2',
    userId: '3',
    user: mockUsers[2],
    eventId: '1',
    rating: 4,
    comment: 'Good turnout and well organized. The location was perfect for a car meet.',
    createdAt: '2024-01-26T15:45:00Z',
    updatedAt: '2024-01-26T15:45:00Z'
  },
  {
    id: '3',
    userId: '1',
    user: mockUsers[0],
    eventId: '2',
    rating: 5,
    comment: 'Incredible show! The vintage Porsches were absolutely stunning. Worth every penny.',
    createdAt: '2024-01-16T12:20:00Z',
    updatedAt: '2024-01-16T12:20:00Z'
  }
];

export const eventCategories: { value: EventCategory; label: string; icon: string }[] = [
  { value: 'car-show', label: 'Car Show', icon: '🏆' },
  { value: 'track-day', label: 'Track Day', icon: '🏁' },
  { value: 'meet', label: 'Meet & Greet', icon: '🤝' },
  { value: 'auction', label: 'Auction', icon: '🔨' },
  { value: 'rally', label: 'Rally', icon: '🗺️' },
  { value: 'conference', label: 'Conference', icon: '📚' },
  { value: 'other', label: 'Other', icon: '🎯' }
];

export const eventTypes: { value: EventType; label: string }[] = [
  { value: 'porsche-only', label: 'Porsche Only' },
  { value: 'mixed-brands', label: 'Mixed Brands' },
  { value: 'vintage', label: 'Vintage' },
  { value: 'modern', label: 'Modern' },
  { value: 'racing', label: 'Racing' },
  { value: 'social', label: 'Social' }
];

// Helper function to get events with reviews
export const getEventsWithReviews = () => {
  return mockEvents.map(event => ({
    ...event,
    reviews: mockReviews.filter(review => review.eventId === event.id)
  }));
};

// Helper function to get events by category
export const getEventsByCategory = (category: EventCategory) => {
  return mockEvents.filter(event => event.category === category);
};

// Helper function to get events by location
export const getEventsByLocation = (location: string) => {
  return mockEvents.filter(event => 
    event.location.toLowerCase().includes(location.toLowerCase())
  );
};

// Helper function to search events
export const searchEvents = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return mockEvents.filter(event => 
    event.title.toLowerCase().includes(lowerQuery) ||
    event.description.toLowerCase().includes(lowerQuery) ||
    event.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}; 