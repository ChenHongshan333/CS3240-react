import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';

const contacts = [
  { id: 1, name: 'Kelly', img: 'https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60' },
  { id: 2, name: 'Ichigo', img: 'https://www.figma.com/api/mcp/asset/4d3c4a4a-aca1-4b04-95a7-955d47552502' },
  { id: 3, name: 'Sheryl', img: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00' },
  { id: 4, name: 'Mizuki', img: 'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced' },
];

const chats = [
  { id: 1, name: 'Ichigo Kurosaki', lastMsg: 'Sure! I\'ll bring the prop to the event.', time: '2m', unread: 2, img: 'https://www.figma.com/api/mcp/asset/4d3c4a4a-aca1-4b04-95a7-955d47552502' },
  { id: 2, name: 'Sheryl Nome', lastMsg: 'Can I borrow the wig for Saturday?', time: '15m', unread: 0, img: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00' },
  { id: 3, name: 'Mizuki', lastMsg: 'Thanks for the quick delivery!', time: '1h', unread: 0, img: 'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced' },
  { id: 4, name: 'Maria Cross', lastMsg: 'Is this still available for swap?', time: '3h', unread: 1, img: 'https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8' },
];

export default function PropMesPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container bg-[#f7f7f7]">
      {/* Header */}
      <div className="bg-white flex items-center justify-between px-4 h-14 border-b">
        <span className="font-bold text-xl text-[#1a1a2e]">PROP<span className="text-red-500">BANK</span></span>
        <span className="font-bold text-base text-[#1a1a2e]">Messages</span>
        <button>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {/* Recent contacts strip */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {contacts.map(c => (
            <button key={c.id} onClick={() => navigate('/chat')} className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img src={c.img} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-gray-600">{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto pb-20">
        {chats.map(chat => (
          <div
            key={chat.id}
            className="bg-white flex items-center gap-3 px-4 py-3 border-b cursor-pointer active:bg-gray-50"
            onClick={() => navigate('/chat')}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img src={chat.img} alt="" className="w-full h-full object-cover" />
              {chat.unread > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{chat.unread}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm text-[#1a1a2e]">{chat.name}</span>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
              <p className="text-xs text-gray-500 truncate mt-0.5">{chat.lastMsg}</p>
            </div>
          </div>
        ))}
      </div>

      <BottomNavbar active="messages" />
    </div>
  );
}
