import React from 'react';
import EventCard from './EventCard';
import { useEvents } from '../context/EventContext';

export default function FeaturedEvents() {
  const { featuredEvents } = useEvents();

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
        <a href="/events" className="text-indigo-600 hover:text-indigo-700 font-medium">
          View all events →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}