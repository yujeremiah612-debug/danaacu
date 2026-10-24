/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CookieBanner } from './components/CookieBanner';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceItem } from './utils/appointmentPlanner';
import { LanguageProvider } from './context/LanguageContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dana_selected_services');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeDetailService, setActiveDetailService] = useState<ServiceItem | null>(null);

  // Sync selected services to local storage
  useEffect(() => {
    try {
      localStorage.setItem('dana_selected_services', JSON.stringify(selectedServices));
    } catch {
      // ignore
    }
  }, [selectedServices]);

  const handleAddToCart = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId);
      }
      return [...prev, serviceId];
    });
  };

  const handleAddDirect = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (!prev.includes(serviceId)) {
        return [...prev, serviceId];
      }
      return prev;
    });
  };

  const handleRemoveService = (serviceId: string) => {
    setSelectedServices((prev) => prev.filter((id) => id !== serviceId));
  };

  const handleClearCart = () => {
    setSelectedServices([]);
  };

  const handleOpenBooking = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />

      <Header
        cartItemCount={selectedServices.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectService={(service) => setActiveDetailService(service)}
                onAddToCart={handleAddToCart}
                selectedServices={selectedServices}
                onOpenBooking={handleOpenBooking}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenBooking={handleOpenBooking} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <ServicesPage
                onSelectService={(service) => setActiveDetailService(service)}
                onAddToCart={handleAddToCart}
                selectedServices={selectedServices}
                onOpenBooking={handleOpenBooking}
              />
            }
          />
        </Routes>
      </main>

      <Footer />

      {/* Cart / Inquiry Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        selectedServices={selectedServices}
        onRemoveService={handleRemoveService}
        onClearCart={handleClearCart}
        onAddService={handleAddDirect}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeDetailService}
        onClose={() => setActiveDetailService(null)}
        onSelectForConsultation={(id) => {
          handleAddDirect(id);
          setIsCartOpen(true);
        }}
        isAlreadySelected={
          activeDetailService
            ? selectedServices.includes(activeDetailService.id)
            : false
        }
      />

      {/* Original-style Cookie Notice Banner */}
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <MainLayout />
      </LanguageProvider>
    </BrowserRouter>
  );
}
