import type { Event, EventCategory, EventType } from '../types';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const getEventStatus = (event: Event): string => {
  const now = new Date();
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);

  if (event.status === 'cancelled') return 'Cancelled';
  if (event.status === 'completed') return 'Completed';
  if (now < startDate) return 'Upcoming';
  if (now >= startDate && now <= endDate) return 'Ongoing';
  return 'Past';
};

export const getEventStatusColor = (status: string): string => {
  switch (status) {
    case 'Upcoming':
      return 'text-blue-600 bg-blue-100';
    case 'Ongoing':
      return 'text-green-600 bg-green-100';
    case 'Past':
      return 'text-gray-600 bg-gray-100';
    case 'Cancelled':
      return 'text-red-600 bg-red-100';
    case 'Completed':
      return 'text-purple-600 bg-purple-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const getCategoryIcon = (category: EventCategory): string => {
  const icons: Record<EventCategory, string> = {
    'car-show': '🏆',
    'track-day': '🏁',
    'meet': '🤝',
    'auction': '🔨',
    'rally': '🗺️',
    'conference': '📚',
    'other': '🎯'
  };
  return icons[category] || '🎯';
};

export const getCategoryLabel = (category: EventCategory): string => {
  const labels: Record<EventCategory, string> = {
    'car-show': 'Car Show',
    'track-day': 'Track Day',
    'meet': 'Meet & Greet',
    'auction': 'Auction',
    'rally': 'Rally',
    'conference': 'Conference',
    'other': 'Other'
  };
  return labels[category] || 'Other';
};

export const getEventTypeLabel = (eventType: EventType): string => {
  const labels: Record<EventType, string> = {
    'porsche-only': 'Porsche Only',
    'mixed-brands': 'Mixed Brands',
    'vintage': 'Vintage',
    'modern': 'Modern',
    'racing': 'Racing',
    'social': 'Social'
  };
  return labels[eventType] || 'Other';
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const getDistanceFromLocation = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

export const formatDistance = (distance: number): string => {
  if (distance < 1) {
    return `${Math.round(distance * 5280)} ft`;
  }
  return `${distance.toFixed(1)} mi`;
};

export const getInitials = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}; 