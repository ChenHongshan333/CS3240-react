import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

export default function AddItemPage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[393px] h-[852px] bg-[#f7f7f7] overflow-hidden flex flex-col justify-between">
      <TopBar />
      <div className="flex-1 overflow-y-auto px-4 mt-4 pb-4">
        <p className="font-['PT_Sans',sans-serif] font-bold text-[24px] text-black mb-4">Add Item</p>

        {/* Image upload */}
        <div className="bg-white rounded-xl border-2 border-dashed border-[#a2d6f9] h-40 flex items-center justify-center mb-4 cursor-pointer">
          <div className="text-center">
            <svg className="size-10 mx-auto text-[#a2d6f9]" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="#a2d6f9" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="font-['PT_Sans',sans-serif] text-[14px] text-[#9c9c9c] mt-1">Upload Photos</p>
          </div>
        </div>

        {[
          { label: 'Item Name *', type: 'text' },
          { label: 'Price (SGD) *', type: 'number' },
          { label: 'Description', type: 'text' },
          { label: 'Condition (New/Used)', type: 'text' },
        ].map(f => (
          <div key={f.label} className="mb-5">
            <input placeholder={f.label} type={f.type} className="w-full font-['PT_Sans',sans-serif] text-[16px] text-black placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent" />
          </div>
        ))}

        <p className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black mb-2">Category</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {['Wigs', 'Costumes', 'Accessories', 'Weapons', 'Makeup', 'Male', 'Female'].map(cat => (
            <button key={cat} className="h-[30px] px-4 rounded-xl text-[12px] font-['PT_Sans',sans-serif] bg-white border border-[#a2d6f9] text-[#627efb]">{cat}</button>
          ))}
        </div>

        <p className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black mb-2">Type</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {['Sell', 'Rent', 'Swap', 'Borrow'].map(type => (
            <button key={type} className="h-[30px] px-4 rounded-xl text-[12px] font-['PT_Sans',sans-serif] bg-white border border-[#a2d6f9] text-[#627efb]">{type}</button>
          ))}
        </div>

        <button onClick={() => navigate('/profile')} className="w-full bg-[#1e96fc] h-[50px] rounded-xl font-['PT_Sans',sans-serif] text-[18px] text-white font-bold">
          Publish Item
        </button>
      </div>
      <BottomNavbar active="trade" />
    </div>
  );
}
