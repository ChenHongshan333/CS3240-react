import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

const tabs = ['Swap list', 'My items', 'Publish', 'Profile', 'Messages', 'Orders'];

const swaps = [
  {
    id: 1,
    theirItem: 'Violet Evergarden Dress, M',
    myItem: 'Gothic Lolita Green Wig',
    with: '@AnimeShop',
    status: 'Pending',
    statusColor: 'text-yellow-600',
    theirImg: 'https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8',
    myImg: 'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced',
  },
  {
    id: 2,
    theirItem: 'Cosmic Princess Kaguya Set',
    myItem: 'Light Blue Wavy Wig',
    with: '@PropBank',
    status: 'Approved',
    statusColor: 'text-green-600',
    theirImg: 'https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60',
    myImg: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00',
  },
];

export default function SwapListPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Swap list');

  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />

      {/* Tabs */}
      <div className="bg-white flex border-b px-2 text-sm text-gray-700 overflow-x-auto scrollbar-hide">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => {
              setActiveTab(t);
              if (t === 'My items') navigate('/my-items');
              if (t === 'Profile') navigate('/profile');
              if (t === 'Messages') navigate('/messages');
              if (t === 'Orders') navigate('/order');
            }}
            className={`flex-shrink-0 px-3 py-3 ${activeTab === t ? 'font-bold border-b-2 border-black' : ''}`}
          >
            {t}
          </button>
        ))}
      </div>

      <h1 className="text-lg font-bold px-4 py-3 text-[#1a1a2e]">My Swap Requests</h1>

      <div className="flex-1 overflow-y-auto px-4 pb-20 space-y-3">
        {swaps.map(swap => (
          <div key={swap.id} className="bg-white rounded-xl p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-14 h-14 rounded-xl overflow-hidden">
                <img src={swap.myImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 16l-4-4 4-4M17 8l4 4-4 4M3 12h18" stroke="#1e96fc" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="w-14 h-14 rounded-xl overflow-hidden">
                <img src={swap.theirImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 ml-1">
                <p className="text-xs text-gray-500">My item → Their item</p>
                <p className="text-xs font-semibold text-[#1a1a2e] truncate">{swap.myItem}</p>
                <p className="text-xs font-semibold text-[#1a1a2e] truncate">{swap.theirItem}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">With {swap.with}</span>
              <span className={`text-xs font-bold ${swap.statusColor}`}>{swap.status}</span>
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => navigate('/chat')}
                className="flex-1 border border-gray-200 text-gray-600 py-1.5 rounded-lg text-xs"
              >
                Message
              </button>
              {swap.status === 'Approved' && (
                <button className="flex-1 bg-[#1e96fc] text-white py-1.5 rounded-lg text-xs">
                  Confirm Swap
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
