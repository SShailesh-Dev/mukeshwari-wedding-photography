/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { BookingProvider } from './context/BookingContext';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Team from './pages/Team';
import Booking from './pages/Booking';
import GalleryDetail from './pages/GalleryDetail';

export default function App() {
  return (
    <Router>
      <BookingProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<GalleryDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/team" element={<Team />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </Layout>
      </BookingProvider>
    </Router>
  );
}
