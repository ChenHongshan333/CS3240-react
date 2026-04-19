import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';

export default function AfterSellingPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container bg-white">
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-6">
        {/* Checkmark */}
        <div className="w-28 h-28 rounded-full bg-[#1e96fc] flex items-center justify-center">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-[#1a1a2e] text-center">Selling successful!</h1>
        <p className="text-sm text-gray-500 text-center">
          Your order has been confirmed. The buyer will be notified and payment will be processed.
        </p>

        <div className="bg-[#e5f4fe] rounded-xl p-4 w-full text-sm text-gray-700 space-y-1">
          <div className="flex justify-between"><span>Item</span><span className="font-semibold">Light Blue Wig</span></div>
          <div className="flex justify-between"><span>Buyer</span><span className="font-semibold">Hongshan</span></div>
          <div className="flex justify-between"><span>Amount</span><span className="font-semibold">$14.76</span></div>
          <div className="flex justify-between"><span>Status</span><span className="text-green-600 font-semibold">Confirmed</span></div>
        </div>

        <button
          onClick={() => navigate('/my-items')}
          className="w-full bg-[#1e96fc] text-white py-3 rounded-xl font-bold text-lg"
        >
          View My Items
        </button>
        <button
          onClick={() => navigate('/order')}
          className="w-full border border-[#1e96fc] text-[#1e96fc] py-3 rounded-xl font-bold text-lg"
        >
          View All Orders
        </button>
      </div>

      <BottomNavbar active="profile" />
    </div>
  );
}
