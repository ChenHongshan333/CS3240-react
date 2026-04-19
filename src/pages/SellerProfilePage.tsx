import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

const items = [
  { id: 1, name: 'Light Blue Wavy Wig', price: '$14.76', img: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00' },
  { id: 2, name: 'Gothic Lolita Wig', price: '$23.68', img: 'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced' },
  { id: 3, name: 'Violet Evergarden Dress', price: '$48.55', img: 'https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8' },
  { id: 4, name: 'Cosplay Shoes', price: '$32.00', img: 'https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60' },
];

export default function SellerProfilePage() {
  const navigate = useNavigate();
  const [following, setFollowing] = useState(false);

  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Profile header */}
        <div className="bg-white px-4 py-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
              <img src="https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg text-[#1a1a2e]">@Kelly_Tan</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                <span>⭐ 4.0 / 5.0</span>
                <span>·</span>
                <span>23 items</span>
              </div>
              <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                <span>128 followers</span>
                <span>64 following</span>
              </div>
            </div>
            <button
              onClick={() => setFollowing(!following)}
              className={`px-4 py-2 rounded-xl text-sm font-bold ${following ? 'bg-gray-200 text-gray-600' : 'bg-[#1e96fc] text-white'}`}
            >
              {following ? 'Following' : 'Follow'}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">Cosplay enthusiast from Singapore 🇸🇬 Specializing in anime wigs and accessories.</p>

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => navigate('/chat')}
              className="flex-1 border border-[#1e96fc] text-[#1e96fc] py-2 rounded-xl text-sm font-semibold"
            >
              Message
            </button>
          </div>
        </div>

        {/* Items grid */}
        <div className="px-4 py-3">
          <div className="font-bold text-sm text-[#1a1a2e] mb-3">Items for Sale</div>
          <div className="grid grid-cols-2 gap-3">
            {items.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer"
                onClick={() => navigate('/item-detail')}
              >
                <div className="aspect-square overflow-hidden">
                  <img src={item.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-2">
                  <p className="text-xs text-[#1a1a2e] line-clamp-2">{item.name}</p>
                  <p className="text-sm font-bold text-[#1e96fc] mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
