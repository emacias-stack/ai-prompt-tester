export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImageUrl?: string;
  bio?: string;
  location?: string;
  preferences: UserPreferences;
  isVerified: boolean;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserPreferences {
  favoriteModels?: string[];
  notificationSettings?: {
    email: boolean;
    push: boolean;
  };
  locationRadius?: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  latitude?: number;
  longitude?: number;
  startDate: string;
  endDate: string;
  category: EventCategory;
  eventType: EventType;
  organizerId: string;
  organizer?: User;
  maxAttendees?: number;
  currentAttendees: number;
  isFree: boolean;
  ticketPrice?: number;
  imageUrls: string[];
  tags: string[];
  status: EventStatus;
  createdAt: string;
  updatedAt: string;
}

export type EventCategory = 
  | 'car-show'
  | 'track-day'
  | 'meet'
  | 'auction'
  | 'rally'
  | 'conference'
  | 'other';

export type EventType = 
  | 'porsche-only'
  | 'mixed-brands'
  | 'vintage'
  | 'modern'
  | 'racing'
  | 'social';

export type EventStatus = 
  | 'draft'
  | 'active'
  | 'cancelled'
  | 'completed';

export interface Attendance {
  id: string;
  userId: string;
  eventId: string;
  status: AttendanceStatus;
  createdAt: string;
  updatedAt: string;
}

export type AttendanceStatus = 
  | 'registered'
  | 'attended'
  | 'cancelled';

export interface Review {
  id: string;
  userId: string;
  user?: User;
  eventId: string;
  rating: number;
  comment?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: string;
}

export type NotificationType = 
  | 'event_reminder'
  | 'event_update'
  | 'new_event'
  | 'rsvp_confirmation'
  | 'system';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchFilters {
  query?: string;
  category?: EventCategory;
  eventType?: EventType;
  location?: string;
  startDate?: string;
  endDate?: string;
  isFree?: boolean;
  radius?: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
} 