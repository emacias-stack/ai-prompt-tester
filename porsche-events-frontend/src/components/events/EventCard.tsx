import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import type { Event } from '../../types';
import {
  formatDate,
  formatTime,
  getEventStatus,
  getEventStatusColor,
  getCategoryIcon,
  getCategoryLabel,
  formatPrice,
  truncateText
} from '../../utils/helpers';

interface EventCardProps {
  event: Event;
  onAttend?: (eventId: string) => void;
  isAttending?: boolean;
  loading?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  onAttend,
  isAttending = false,
  loading = false
}) => {
  const status = getEventStatus(event);
  const statusColor = getEventStatusColor(status);
  const categoryIcon = getCategoryIcon(event.category);
  const categoryLabel = getCategoryLabel(event.category);

  return (
    <Card className="h-full flex flex-col group overflow-hidden" hover>
      {/* Event Image */}
      <div className="relative mb-4 overflow-hidden">
        <img
          src={event.imageUrls[0] || '/placeholder-event.jpg'}
          alt={event.title}
          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-lg ${statusColor}`}>
            {status}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/95 text-gray-700 shadow-lg backdrop-blur-sm">
            {categoryIcon} {categoryLabel}
          </span>
        </div>
      </div>

      {/* Event Content */}
      <div className="flex-1 flex flex-col">
        <Link to={`/events/${event.id}`} className="group">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-porsche-red transition-colors duration-200 mb-2">
            {event.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 flex-1">
          {truncateText(event.description, 120)}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(event.startDate)}
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formatTime(event.startDate)} - {formatTime(event.endDate)}
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {truncateText(event.location, 40)}
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              {event.currentAttendees} / {event.maxAttendees || '∞'} attending
            </span>
            <span className="font-medium">
              {event.isFree ? 'Free' : formatPrice(event.ticketPrice || 0)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link to={`/events/${event.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              View Details
            </Button>
          </Link>
          
          {onAttend && (
            <Button
              variant={isAttending ? 'secondary' : 'primary'}
              size="sm"
              loading={loading}
              onClick={() => onAttend(event.id)}
              disabled={event.currentAttendees >= (event.maxAttendees || Infinity)}
            >
              {isAttending ? 'Attending' : 'Attend'}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}; 