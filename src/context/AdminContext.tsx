import React, { createContext, useContext, useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'upcoming' | 'past' | 'draft';
  ticketsSold: number;
  capacity: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
  status: 'active' | 'suspended';
  joinDate: string;
}

interface Order {
  id: string;
  user: string;
  event: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'cancelled';
  paymentMethod: string;
}

interface AdminContextType {
  events: Event[];
  users: User[];
  orders: Order[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  updateUserStatus: (id: string, status: User['status']) => void;
  updateOrderStatus: (id: string, status: Order['status']) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Afro Nation Ghana 2024',
      date: '2024-12-15',
      location: 'Accra Sports Stadium',
      status: 'upcoming',
      ticketsSold: 1234,
      capacity: 5000
    },
    {
      id: '2',
      title: 'Lagos Jazz Festival',
      date: '2024-11-20',
      location: 'Eko Hotel & Suites',
      status: 'draft',
      ticketsSold: 0,
      capacity: 2000
    }
  ]);

  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+233 20 123 4567',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+233 24 987 6543',
      role: 'admin',
      status: 'active',
      joinDate: '2024-02-01'
    }
  ]);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD-001',
      user: 'John Doe',
      event: 'Afro Nation Ghana 2024',
      date: '2024-03-15',
      amount: 300,
      status: 'completed',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'ORD-002',
      user: 'Jane Smith',
      event: 'Lagos Jazz Festival',
      date: '2024-03-14',
      amount: 150,
      status: 'pending',
      paymentMethod: 'Mobile Money'
    }
  ]);

  const addEvent = (event: Omit<Event, 'id'>) => {
    const newEvent = {
      ...event,
      id: Math.random().toString(36).substr(2, 9)
    };
    setEvents([...events, newEvent]);
  };

  const updateEvent = (id: string, eventUpdate: Partial<Event>) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, ...eventUpdate } : event
    ));
  };

  const deleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const updateUserStatus = (id: string, status: User['status']) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status } : user
    ));
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status } : order
    ));
  };

  return (
    <AdminContext.Provider value={{
      events,
      users,
      orders,
      addEvent,
      updateEvent,
      deleteEvent,
      updateUserStatus,
      updateOrderStatus
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}