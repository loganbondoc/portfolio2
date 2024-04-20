import logo from './logo.svg';
import './scss/main.scss';
import Nav from "./components/Nav.js"
import CurrentWorks from "./components/CurrentWorks.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Memento from "./pages/Memento.js"
import Home from "./pages/Home.js"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/memento" element={<Memento />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
