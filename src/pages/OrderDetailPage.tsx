import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

export default function OrderDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[393px] h-[852px] bg-[#f7f7f7] overflow-hidden flex flex-col justify-between">
      <TopBar />
      <div className="flex-1 overflow-y-auto px-4 mt-4">
        <p className="font-['PT_Sans',sans-serif] font-bold text-[24px] text-black mb-4">Order Details</p>
        <div className="bg-white rounded-xl p-4 mb-4 shadow">
          <p className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black mb-2">Delivery Address</p>
          <input placeholder="Full Name" className="w-full border-b border-[#d9d9d9] py-2 mb-3 font-['PT_Sans',sans-serif] text-[14px] outline-none bg-transparent placeholder-[#9c9c9c]" />
          <input placeholder="Phone Number" className="w-full border-b border-[#d9d9d9] py-2 mb-3 font-['PT_Sans',sans-serif] text-[14px] outline-none bg-transparent placeholder-[#9c9c9c]" />
          <input placeholder="Address" className="w-full border-b border-[#d9d9d9] py-2 font-['PT_Sans',sans-serif] text-[14px] outline-none bg-transparent placeholder-[#9c9c9c]" />
        </div>
        <div className="bg-white rounded-xl p-4 mb-4 shadow">
          <p className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black mb-2">Payment Method</p>
          {['Credit / Debit Card', 'PayNow', 'Cash on Delivery'].map(m => (
            <label key={m} className="flex items-center gap-3 mb-2 cursor-pointer">
              <input type="radio" name="payment" className="size-4 accent-[#1e96fc]" />
              <span className="font-['PT_Sans',sans-serif] text-[14px] text-black">{m}</span>
            </label>
          ))}
        </div>
        <div className="bg-white rounded-xl p-4 shadow mb-6">
          <div className="flex justify-between mb-1">
            <span className="font-['PT_Sans',sans-serif] text-[14px] text-[#9c9c9c]">Subtotal</span>
            <span className="font-['PT_Sans',sans-serif] text-[14px] text-black">$ 59.43</span>
          </div>
          <div className="flex justify-between border-t border-[#d9d9d9] pt-2 mt-2">
            <span className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black">Total</span>
            <span className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black">$ 62.43</span>
          </div>
        </div>
        <button onClick={() => navigate('/after-payment')} className="w-full bg-[#1e96fc] h-[50px] rounded-xl font-['PT_Sans',sans-serif] text-[18px] text-white font-bold mb-4">
          Place Order
        </button>
      </div>
      <BottomNavbar active="trade" />
    </div>
  );
}
