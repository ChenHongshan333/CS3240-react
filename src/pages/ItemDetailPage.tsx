import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

const images = [
  'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00',
  'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced',
  'https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8',
];

export default function ItemDetailPage() {
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />

      <div className="flex-1 overflow-y-auto pb-24">
        {/* Image carousel */}
        <div className="relative bg-white">
          <div className="w-full aspect-square overflow-hidden">
            <img src={images[activeImg]} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center gap-2 py-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-2 h-2 rounded-full ${i === activeImg ? 'bg-[#1e96fc]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="px-4 py-3 bg-white mt-2">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#1a1a2e]">$14.76</span>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">Buy</span>
              <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">Borrow</span>
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Swap</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-2">Synthetic Heat-Resistant Wavy Wig, Light Blue, Natural And Realistic Fake Wig</p>
          <p className="text-xs text-gray-400 mt-1">Wig size: 28 inches</p>
        </div>

        {/* Seller info */}
        <div
          className="mx-4 my-2 bg-white rounded-xl p-3 flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/seller-profile')}
        >
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img src="https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="font-bold text-sm text-[#1a1a2e]">@Kelly_Tan</div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>⭐ 4.0</span>
              <span>· 23 items</span>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#999" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>

        {/* Description */}
        <div className="mx-4 my-2 bg-white rounded-xl p-3">
          <div className="font-bold text-sm mb-2">Description</div>
          <p className="text-xs text-gray-600">
            High quality heat-resistant synthetic wig. Light blue wavy style, very natural and realistic.
            Perfect for cosplay events. 28 inches length. Can be styled with low heat tools.
          </p>
        </div>

        {/* Borrow info */}
        <div className="mx-4 my-2 bg-[#e5f4fe] rounded-xl p-3">
          <div className="font-bold text-sm mb-1">Borrow Info</div>
          <div className="text-xs text-gray-600">Fee: $5/day · Min 3 days · Deposit: $20</div>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="fixed bottom-16 left-0 right-0 max-w-[393px] mx-auto bg-white border-t px-4 py-3 flex gap-3">
        <button
          onClick={() => navigate('/borrow-detail')}
          className="flex-1 border border-[#1e96fc] text-[#1e96fc] py-2.5 rounded-xl font-bold text-sm"
        >
          Borrow
        </button>
        <button
          onClick={() => navigate('/chat')}
          className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-xl font-bold text-sm"
        >
          Contact
        </button>
        <button
          onClick={() => navigate('/cart')}
          className="flex-1 bg-[#1e96fc] text-white py-2.5 rounded-xl font-bold text-sm"
        >
          Add to Cart
        </button>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
