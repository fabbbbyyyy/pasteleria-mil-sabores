import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './style.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Catalogo from './pages/Catalogo';
import ProductosPage from './pages/Productos';
import Home from './pages/Home';
import Recomendaciones from './pages/Recomendaciones';
import Comunidad from './pages/Comunidad';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/productos/:categoria" element={<ProductosPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/comunidad" element={<Comunidad />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
