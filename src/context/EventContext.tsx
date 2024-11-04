import React, { createContext, useContext, useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  price: number;
  currency: string;
  description?: string;
}

interface EventContextType {
  events: Event[];
  featuredEvents: Event[];
  addEvent: (event: Event) => void;
  getEvent: (id: string) => Event | undefined;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Afro Nation Ghana 2024',
      date: 'Dec 15, 2024',
      time: '18:00',
      location: 'Accra Sports Stadium',
      imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
      price: 150,
      currency: 'GHS',
      description: 'The biggest afrobeats festival in Africa'
    },
    {
      id: '2',
      title: 'Lagos Jazz Festival',
      date: 'Nov 20, 2024',
      time: '19:30',
      location: 'Eko Hotel & Suites',
      imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629',
      price: 25000,
      currency: 'NGN',
      description: 'A celebration of jazz music in Lagos'
    },
    {
      id: '3',
      title: 'African Cup Finals 2024',
      date: 'Oct 5, 2024',
      time: '14:00',
      location: 'National Stadium, Cairo',
      imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018',
      price: 5000,
      currency: 'EGP',
      description: 'Experience the biggest football event in Africa'
    }
  ]);

  const addEvent = (event: Event) => {
    setEvents([...events, event]);
  };

  const getEvent = (id: string) => {
    return events.find(event => event.id === id);
  };

  return (
    <EventContext.Provider value={{
      events,
      featuredEvents: events.slice(0, 3),
      addEvent,
      getEvent
    }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}