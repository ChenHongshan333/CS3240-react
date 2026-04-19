import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

const recentForwards = [
  { id: 1, name: 'Ichigo', img: 'https://www.figma.com/api/mcp/asset/4d3c4a4a-aca1-4b04-95a7-955d47552502' },
  { id: 2, name: 'Sheryl', img: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00' },
  { id: 3, name: 'Mizuki', img: 'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced' },
];

const recentChats = [
  { id: 1, name: 'Kelly_Tan', lastMsg: 'Sure! I\'ll bring the prop to the event.', img: 'https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60' },
  { id: 2, name: 'Ichigo Kurosaki', lastMsg: 'Can I borrow the wig for Saturday?', img: 'https://www.figma.com/api/mcp/asset/4d3c4a4a-aca1-4b04-95a7-955d47552502' },
  { id: 3, name: 'Sheryl Nome', lastMsg: 'Thanks for the quick delivery!', img: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00' },
  { id: 4, name: 'Maria Cross', lastMsg: 'Is this still available for swap?', img: 'https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8' },
];

export default function ForwardPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number[]>([]);
  const [search, setSearch] = useState('');

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />
      <h1 className="text-lg font-bold text-center py-3 text-[#1a1a2e]">Forward to...</h1>

      {/* Search */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-gray-200">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#999" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#999" strokeWidth="2" strokeLinecap="round"/></svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search contacts..."
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* Recent forwards */}
        <div className="px-4 pb-2">
          <div className="text-xs text-gray-500 mb-2">Recent Forwards</div>
          <div className="flex gap-4">
            {recentForwards.map(c => (
              <button
                key={c.id}
                onClick={() => toggle(c.id)}
                className="flex flex-col items-center gap-1"
              >
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${selected.includes(c.id) ? 'border-[#1e96fc]' : 'border-transparent'}`}>
                  <img src={c.img} alt="" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-gray-600">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* All chats */}
        <div className="px-4 pt-3">
          <div className="text-xs text-gray-500 mb-2">Recent Chats</div>
          <div className="space-y-1">
            {recentChats
              .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
              .map(chat => (
                <div
                  key={chat.id}
                  onClick={() => toggle(chat.id + 100)}
                  className="bg-white flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={chat.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#1a1a2e]">{chat.name}</div>
                    <div className="text-xs text-gray-400 truncate">{chat.lastMsg}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected.includes(chat.id + 100) ? 'bg-[#1e96fc] border-[#1e96fc]' : 'border-gray-300'}`}>
                    {selected.includes(chat.id + 100) && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {selected.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 max-w-[393px] mx-auto px-4 pb-3">
          <button
            onClick={() => navigate('/chat')}
            className="w-full bg-[#1e96fc] text-white py-3 rounded-xl font-bold text-lg"
          >
            Forward ({selected.length})
          </button>
        </div>
      )}

      <BottomNavbar active="messages" />
    </div>
  );
}
