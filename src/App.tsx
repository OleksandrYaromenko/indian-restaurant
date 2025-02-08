import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import Footer from './components/Footer/footer';
import scss from './App.module.scss';
import './i18n/i18n.js';

function App() {
  return (
    <div className={scss.config}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
