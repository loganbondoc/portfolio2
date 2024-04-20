import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav.js"
import CurrentWorks from "./components/CurrentWorks.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Memento from "./pages/Memento.js"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/works" element={<CurrentWorks />} />
          <Route path="/memento" element={<Memento />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
