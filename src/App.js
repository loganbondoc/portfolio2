import logo from './logo.svg';
import React from 'react';
import Nav from "./components/Nav.js"
import CurrentWorks from "./components/CurrentWorks.js"
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Memento from "./pages/Memento.js"
import Home from "./pages/Home.js"
import Portfolio from "./pages/Portfolio.js"
import Resume from "./pages/Resume.js"
import Footer from "./components/Footer.js"

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === "/Home") {
      const element = document.getElementById("CurrentWorks");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/memento" element={<Memento />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;