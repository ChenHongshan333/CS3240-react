import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OpeningPage from './pages/OpeningPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LandingPage from './pages/LandingPage';
import MarketplacePage from './pages/MarketplacePage';
import ShopSearchPage from './pages/ShopSearchPage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import OrderDetailPage from './pages/OrderDetailPage';
import AfterPaymentPage from './pages/AfterPaymentPage';
import AddItemPage from './pages/AddItemPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/shop" element={<ShopSearchPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-detail" element={<OrderDetailPage />} />
        <Route path="/after-payment" element={<AfterPaymentPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
