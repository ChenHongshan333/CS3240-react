import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';

export default function AfterPaymentPage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[393px] h-[852px] bg-[#f7f7f7] overflow-hidden flex flex-col items-center justify-center gap-6">
      <div className="size-24 bg-[#1e96fc] rounded-full flex items-center justify-center">
        <svg className="size-12" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className="font-['PT_Sans',sans-serif] font-bold text-[24px] text-black">Payment Successful!</p>
      <p className="font-['PT_Sans',sans-serif] text-[16px] text-[#9c9c9c] text-center px-8">Your order has been placed. You will receive a confirmation shortly.</p>
      <button onClick={() => navigate('/shop')} className="bg-[#1e96fc] h-[50px] w-[200px] rounded-xl font-['PT_Sans',sans-serif] text-[18px] text-white font-bold">
        Continue Shopping
      </button>
      <div className="absolute bottom-0 w-full">
        <BottomNavbar active="trade" />
      </div>
    </div>
  );
}
