import React from 'react';
import { EventCard } from './EventCard';
import { Loading } from '../common/Loading';
import type { Event } from '../../types';

interface EventListProps {
  events: Event[];
  loading?: boolean;
  error?: string | null;
  onAttend?: (eventId: string) => void;
  attendingEvents?: string[];
  loadingAttendances?: string[];
}

export const EventList: React.FC<EventListProps> = ({
  events,
  loading = false,
  error = null,
  onAttend,
  attendingEvents = [],
  loadingAttendances = []
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loading size="lg" text="Loading events..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Events</h3>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-porsche-red hover:text-red-700 font-medium"
        >
          Try again
        </button>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Events Found</h3>
        <p className="text-gray-600 mb-4">
          There are no events matching your current filters.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="text-porsche-red hover:text-red-700 font-medium"
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onAttend={onAttend}
          isAttending={attendingEvents.includes(event.id)}
          loading={loadingAttendances.includes(event.id)}
        />
      ))}
    </div>
  );
}; 