import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import { EventProvider } from './context/EventContext';
import { AuthProvider } from './context/AuthContext';
import { AdminProvider } from './context/AdminContext';
import { SecurityProvider } from './context/SecurityContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <SecurityProvider>
          <AdminProvider>
            <EventProvider>
              <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex flex-col">
                <Navbar />
                <main className="container mx-auto px-4 py-8 flex-grow">
                  <AppRoutes />
                </main>
                <Footer />
              </div>
            </EventProvider>
          </AdminProvider>
        </SecurityProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;