import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

const tabs = ['Selling', 'Booked', 'Sold'];

const allItems = [
  { id: 1, name: 'Light Blue Wavy Wig, 28 inches', price: '$14.76', status: 'Selling', img: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00' },
  { id: 2, name: 'Gothic Lolita Green Wig, 44 inches', price: '$23.68', status: 'Selling', img: 'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced' },
  { id: 3, name: 'Violet Evergarden Dress, Beige M', price: '$48.55', status: 'Booked', img: 'https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8' },
  { id: 4, name: 'Cosmic Princess Kaguya Full Set', price: '$120.00', status: 'Sold', img: 'https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60' },
];

const statusColors: Record<string, string> = {
  Selling: 'bg-blue-100 text-blue-600',
  Booked: 'bg-yellow-100 text-yellow-600',
  Sold: 'bg-gray-100 text-gray-500',
};

export default function MyItemListPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Selling');

  const items = allItems.filter(i => i.status === activeTab);

  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />
      <h1 className="text-xl font-bold text-center py-3 text-[#1a1a2e]">My Items</h1>

      {/* Tabs */}
      <div className="bg-white flex border-b">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-medium ${activeTab === tab ? 'border-b-2 border-[#1e96fc] text-[#1e96fc]' : 'text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 pb-20 space-y-3">
        {items.length === 0 && (
          <div className="text-center text-gray-400 text-sm py-12">No {activeTab.toLowerCase()} items</div>
        )}
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-xl p-3 flex gap-3 shadow-sm">
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
              <img src={item.img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#1a1a2e] line-clamp-2">{item.name}</p>
              <p className="text-base font-bold text-[#1e96fc] mt-1">{item.price}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${statusColors[item.status]}`}>{item.status}</span>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <button className="text-xs text-gray-500 border border-gray-200 rounded-lg px-2 py-1">Edit</button>
              <button className="text-xs text-red-400 border border-red-200 rounded-lg px-2 py-1">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-16 left-0 right-0 max-w-[393px] mx-auto px-4 pb-3">
        <button
          onClick={() => navigate('/add-item')}
          className="w-full bg-[#1e96fc] text-white py-3 rounded-xl font-bold text-lg"
        >
          + Add New Item
        </button>
      </div>

      <BottomNavbar active="profile" />
    </div>
  );
}
