
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Shops from './Pages/Shop.jsx';
import Product from './Pages/Product.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Cart from './Pages/Cart.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shops />} />
        <Route path="/Men" element={<ShopCategory category="men" />} />
        <Route path="/Women" element={<ShopCategory category="women" />} />
        <Route path="/Kids" element={<ShopCategory category="kids" />} />
        <Route path="/Product" element={<Product />} />
        <Route path=':ProductId' element={<Product />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/Cart" element={<Cart />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
