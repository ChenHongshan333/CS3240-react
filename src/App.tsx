import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OpeningPage from './pages/OpeningPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LandingPage from './pages/LandingPage';
import LandingPageNew from './pages/LandingPageNew';
import MarketplacePage from './pages/MarketplacePage';
import ShopSearchPage from './pages/ShopSearchPage';
import SearchItemPage from './pages/SearchItemPage';
import MessagesPage from './pages/MessagesPage';
import PropMesPage from './pages/PropMesPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import OrderDetailPage from './pages/OrderDetailPage';
import OrderDetailedPage from './pages/OrderDetailedPage';
import AfterPaymentPage from './pages/AfterPaymentPage';
import AddItemPage from './pages/AddItemPage';
import ItemDetailPage from './pages/ItemDetailPage';
import BorrowDetailPage from './pages/BorrowDetailPage';
import AfterBorrowRequestPage from './pages/AfterBorrowRequestPage';
import SwapDetailPage from './pages/SwapDetailPage';
import AfterSwapRequestPage from './pages/AfterSwapRequestPage';
import SellerProfilePage from './pages/SellerProfilePage';
import ChatPage from './pages/ChatPage';
import MyItemListPage from './pages/MyItemListPage';
import OrderPage from './pages/OrderPage';
import AfterSellingPage from './pages/AfterSellingPage';
import SwapListPage from './pages/SwapListPage';
import ForwardPage from './pages/ForwardPage';
import ExistingPlanPage from './pages/ExistingPlanPage';
import PlanCreationPage from './pages/PlanCreationPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<OpeningPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Landing */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/landing-new" element={<LandingPageNew />} />

        {/* Marketplace */}
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/shop" element={<ShopSearchPage />} />
        <Route path="/search-item" element={<SearchItemPage />} />
        <Route path="/item-detail" element={<ItemDetailPage />} />
        <Route path="/seller-profile" element={<SellerProfilePage />} />

        {/* Borrow & Swap flows */}
        <Route path="/borrow-detail" element={<BorrowDetailPage />} />
        <Route path="/after-borrow-request" element={<AfterBorrowRequestPage />} />
        <Route path="/swap-detail" element={<SwapDetailPage />} />
        <Route path="/after-swap-request" element={<AfterSwapRequestPage />} />

        {/* Cart & Orders (buyer) */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-detail" element={<OrderDetailPage />} />
        <Route path="/order-detailed" element={<OrderDetailedPage />} />
        <Route path="/after-payment" element={<AfterPaymentPage />} />

        {/* Messages & Chat */}
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/prop-mes" element={<PropMesPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/forward" element={<ForwardPage />} />

        {/* Profile & Seller flows */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path="/my-items" element={<MyItemListPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/after-selling" element={<AfterSellingPage />} />
        <Route path="/swap-list" element={<SwapListPage />} />

        {/* Workshop / Plans */}
        <Route path="/plan-creation" element={<PlanCreationPage />} />
        <Route path="/existing-plan" element={<ExistingPlanPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
