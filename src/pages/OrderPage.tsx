import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import TopBar from '../components/TopBar';

const tabs = ['My items', 'Publish', 'Profile', 'Messages', 'Orders'];

const orders = [
  {
    id: 1,
    buyer: 'Hongshan',
    item: 'Light Blue Wavy Wig, 28 inches',
    price: '$14.76',
    status: 'Pending',
    statusColor: 'text-yellow-600',
    img: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00',
    date: '2026-04-10',
  },
  {
    id: 2,
    buyer: 'Mizuki',
    item: 'Gothic Lolita Green Wig',
    price: '$23.68',
    status: 'Confirmed',
    statusColor: 'text-green-600',
    img: 'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced',
    date: '2026-04-08',
  },
  {
    id: 3,
    buyer: 'Sheryl',
    item: 'Violet Evergarden Dress, M',
    price: '$48.55',
    status: 'Shipped',
    statusColor: 'text-blue-600',
    img: 'https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8',
    date: '2026-04-05',
  },
];

export default function OrderPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Orders');

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
            }}
            className={`flex-shrink-0 px-3 py-3 ${activeTab === t ? 'font-bold border-b-2 border-black' : ''}`}
          >
            {t}
          </button>
        ))}
      </div>

      <h1 className="text-lg font-bold px-4 py-3 text-[#1a1a2e]">Incoming Orders</h1>

      <div className="flex-1 overflow-y-auto px-4 pb-20 space-y-3">
        {orders.map(order => (
          <div key={order.id} className="bg-white rounded-xl p-3 shadow-sm">
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img src={order.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#1a1a2e] line-clamp-2">{order.item}</p>
                <p className="text-xs text-gray-400 mt-0.5">Buyer: {order.buyer} · {order.date}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-[#1e96fc]">{order.price}</span>
                  <span className={`text-xs font-semibold ${order.statusColor}`}>{order.status}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 border border-[#1e96fc] text-[#1e96fc] py-1.5 rounded-lg text-xs font-semibold">
                View Details
              </button>
              {order.status === 'Pending' && (
                <button
                  onClick={() => navigate('/after-selling')}
                  className="flex-1 bg-[#1e96fc] text-white py-1.5 rounded-lg text-xs font-semibold"
                >
                  Confirm Order
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <BottomNavbar active="profile" />
    </div>
  );
}
