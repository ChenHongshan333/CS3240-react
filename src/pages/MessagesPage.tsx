import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import TopBar from '../components/TopBar';

const contacts = [
  "https://www.figma.com/api/mcp/asset/c417c2ba-66c3-49ee-9785-500fe573414b",
  "https://www.figma.com/api/mcp/asset/21ecc506-3431-4470-a2c5-b866a9c3b51b",
  "https://www.figma.com/api/mcp/asset/b250685d-7260-4d7b-97aa-e6a8151300f8",
  "https://www.figma.com/api/mcp/asset/ac933221-e1b1-459a-8aee-9d731be9001a",
  "https://www.figma.com/api/mcp/asset/4c8390a3-8bea-4183-a2a4-e4b9b04ba707",
  "https://www.figma.com/api/mcp/asset/ece93c16-4d75-4c2a-9062-8abb4dff9f64",
];

const chats = [
  { avatar: "https://www.figma.com/api/mcp/asset/606e941f-ce18-4577-9435-380490aab4ca", name: 'Kelly_Tan', msg: 'Is there anything I could do for you?', time: '12:03 pm', unread: 1 },
  { avatar: "https://www.figma.com/api/mcp/asset/46797c71-3c38-4e9e-8110-12cf9118625d", name: 'Ichigo', msg: 'HEYYYY do u want to go AFA 2026 tgt?', time: '11:45 am', unread: 2 },
  { avatar: "https://www.figma.com/api/mcp/asset/feaa0e52-6d3f-452a-9fa5-759d520e665d", name: 'Sheryl', msg: 'Having lunch?', time: '10:01 am', unread: 0 },
  { avatar: "https://www.figma.com/api/mcp/asset/058e870b-f013-4b9d-bb47-72cb5ab1e083", name: 'Mizuki', msg: 'Running tgt?', time: '8:03 am', unread: 0 },
  { avatar: "https://www.figma.com/api/mcp/asset/7db3adda-d71b-4025-a392-8556dae1cbc0", name: 'Maria', msg: 'Good night!', time: 'yesterday 22:19 pm', unread: 0 },
];

export default function MessagesPage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[393px] h-[852px] bg-[#f7f7f7] overflow-hidden flex flex-col justify-between">
      <TopBar />

      {/* Tabs */}
      <div className="bg-transparent px-4 pt-2 pb-0">
        <div className="flex gap-12 text-[16px] font-['PT_Sans',sans-serif]">
          <button onClick={() => navigate('/shop')} className="text-black">Shop</button>
          <button onClick={() => navigate('/cart')} className="text-black">Cart</button>
          <span className="text-black font-bold border-b-2 border-black pb-1 cursor-pointer">Messages</span>
          <button className="text-black">Orders</button>
        </div>
      </div>

      {/* Searchbar */}
      <div className="bg-white mx-3 mt-2 px-3 py-2 rounded-xl flex items-center gap-2">
        <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#9c9c9c" strokeWidth="2"/>
          <path d="M16.5 16.5L21 21" stroke="#9c9c9c" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <input placeholder="Search..." className="outline-none bg-transparent font-['PT_Sans',sans-serif] text-[16px] w-full placeholder-[#9c9c9c]" />
      </div>

      {/* Contacts */}
      <div className="px-3 mt-2">
        <p className="font-['PT_Sans',sans-serif] text-[16px] text-[#5a5a5a] mb-2">Contacts</p>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {contacts.map((src, i) => (
            <img key={i} src={src} alt="" className="size-[71px] rounded-full shrink-0 object-cover" />
          ))}
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto px-3 mt-2">
        <p className="font-['PT_Sans',sans-serif] text-[16px] text-[#5a5a5a] mb-2">Chat</p>
        <div className="flex flex-col gap-2">
          {chats.map((chat, i) => (
            <div key={i} className="bg-white rounded-xl p-3 flex items-center gap-3 cursor-pointer">
              <img src={chat.avatar} alt="" className="size-[71px] rounded-full object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="font-['PT_Sans',sans-serif] font-bold text-[18px] text-black">{chat.name}</p>
                  <p className="font-['PT_Sans',sans-serif] text-[14px] text-[#3e5eee] whitespace-nowrap">{chat.time}</p>
                </div>
                <p className={`font-['PT_Sans',sans-serif] text-[16px] ${chat.unread ? 'text-black' : 'text-[#9c9c9c]'} truncate`}>{chat.msg}</p>
              </div>
              {chat.unread > 0 && (
                <div className="size-5 bg-[#1e96fc] rounded-full flex items-center justify-center shrink-0">
                  <span className="font-['PT_Sans',sans-serif] text-[16px] text-white">{chat.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
