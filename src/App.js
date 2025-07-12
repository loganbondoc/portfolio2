import logo from './images/lb_logo 2.0.svg';
import React from 'react';
import Nav from "./components/Nav.js"
import CurrentWorks from "./components/DesignWorks.js"
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CustomCursor from './utils/customcursor.js';
import { CursorContextProvider } from './utils/cursorcontext.js';

//Images
import Memento from "./pages/Memento.js"
import Home from "./pages/Home.js"
import Portfolio from "./pages/Portfolio.js"
import UrTrip from "./pages/UrTrip.js"
import Resume from "./pages/Resume.js"
import Footer from "./components/Footer.js"
import PathwayCabinet from "./pages/PathwayCabinet.js"


// Icons
import gitHubIcon from "./images/lb_logo 2.0.svg"

//Components
import Dock from "./components/Dock.jsx"

const items = [
  { icon: <gitHubIcon size={18} />, label: 'Home', onClick: () => alert('Home!') },
  { icon: <gitHubIcon size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
  { icon: <gitHubIcon size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
  { icon: <gitHubIcon size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
];

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
      {/* <CursorContextProvider> */}
      {/* <CustomCursor /> */}
      <div>
        {/* <Nav/> */}
        {/* <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        /> */}


        {/* Scroll to Top */}
        <ScrollToTop />

        {/* Routes */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/memento" element={<Memento />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/urtrip" element={<UrTrip />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/pathwaycabinet" element={<PathwayCabinet />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
      {/* </CursorContextProvider> */}

    </BrowserRouter>
  );
}

export default App;