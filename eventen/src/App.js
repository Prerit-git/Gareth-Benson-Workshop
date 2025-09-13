import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Ourgallery from './Pages/Ourgallery';
import Bloglists from './Pages/Bloglists';
import Blogsingle from './Pages/Blogsingle';
import Pricing from './Pages/Pricing';
import Booknow from './Pages/Booknow';
import Comingsoon from './Pages/Comingsoon';
import Faq from './Pages/Faq';
import Error from './Pages/Error';
import Sponsers from './Pages/Sponsers';
import Speakerlists from './Pages/Speakerlists';
import Speakerdetail from './Pages/Speakerdetail';
import Eventlists from './Pages/Eventlists';
import Eventdetail from './Pages/Eventdetail';
import Searchresult from './Pages/Searchresult';
import Productlists from './Pages/Productlists';
import Productsingle from './Pages/Productsingle';
import Testimonials from './Pages/Testimonials';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/Comingsoon';

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Ourgallery" element={<Ourgallery />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Booknow" element={<Booknow />} />
        <Route path="/Comingsoon" element={<Comingsoon />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Speakerlists" element={<Speakerlists />} />
        <Route path="/Speakerdetail" element={<Speakerdetail />} />
        <Route path="/Eventlists" element={<Eventlists />} />
        <Route path="/Eventdetail" element={<Eventdetail />} />
        <Route path="/Searchresult" element={<Searchresult />} />
        <Route path="/Productlists" element={<Productlists />} />
        <Route path="/Productsingle" element={<Productsingle />} />
        <Route path="/Sponsers" element={<Sponsers />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Bloglists" element={<Bloglists />} />
        <Route path="/Blogsingle" element={<Blogsingle />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
