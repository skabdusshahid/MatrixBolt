import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TeamMemberDetail from './pages/TeamMemberDetail';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  // State to track current route
  const [currentRoute, setCurrentRoute] = React.useState(window.location.pathname);

  // Smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Handle navigation
    const handleNavigation = () => {
      setCurrentRoute(window.location.pathname);
      window.scrollTo(0, 0);
    };

    // Add event listener for popstate (back/forward navigation)
    window.addEventListener('popstate', handleNavigation);

    // Handle clicks on links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && !anchor.getAttribute('href')?.startsWith('#') && !anchor.getAttribute('target')) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          window.history.pushState({}, '', href);
          setCurrentRoute(href);
          window.scrollTo(0, 0);
        }
      }
    });

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  // Render different content based on route
  const renderContent = () => {
    // Team member detail page
    if (currentRoute.startsWith('/team/')) {
      const memberId = currentRoute.split('/team/')[1];
      return <TeamMemberDetail memberId={memberId} />;
    }
    
    // Service detail page
    if (currentRoute.startsWith('/services/')) {
      const serviceId = currentRoute.split('/services/')[1];
      return <ServiceDetail serviceId={serviceId} />;
    }
    
    // Home page
    return (
      <>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Team />
        <ContactForm />
      </>
    );
  };

  return (
    <div className="font-sans">
      <Navbar />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;