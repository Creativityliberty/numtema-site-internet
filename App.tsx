
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SupportButton } from './components/SupportButton';
import { Chatbot } from './components/Chatbot';

// Sections (SPA Home)
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Showcase3D } from './sections/Showcase3D';
import { Packs } from './sections/Packs';
import { Portfolio } from './sections/Portfolio';
import { Process } from './sections/Process';
import { FAQ } from './sections/FAQ';

// Independent Pages
import { FormationsPage } from './pages/FormationsPage';
import { ContactPage } from './pages/ContactPage';
import { RealisationsPage } from './pages/RealisationsPage';
import { AboutPage } from './pages/AboutPage';
import { LegalMentionsPage } from './pages/LegalMentionsPage';
import { CGVPage } from './pages/CGVPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Showcase3D />
    <Packs />
    <Portfolio />
    <Process />
    <FAQ />
  </>
);

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/mentions-legales" element={<LegalMentionsPage />} />
            <Route path="/cgv" element={<CGVPage />} />
            <Route path="/confidentialite" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Persistent UI */}
        <SupportButton onOpenChat={() => setIsChatOpen(true)} />
        <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
