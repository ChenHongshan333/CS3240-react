import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';

const initialMessages = [
  { id: 1, from: 'them', text: 'Hi! I saw you were interested in the Light Blue Wig.' },
  { id: 2, from: 'me', text: 'Yes! Is the price negotiable? I was thinking $12?' },
  { id: 3, from: 'them', text: 'I can do $13, that\'s my lowest. It\'s in excellent condition!' },
  { id: 4, from: 'me', text: 'Deal! Can I pick it up this weekend?' },
  { id: 5, from: 'them', text: 'Sure, Saturday works for me. I\'ll be at NUS.' },
];

export default function ChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: prev.length + 1, from: 'me', text: input.trim() }]);
    setInput('');
  };

  return (
    <div className="page-container bg-[#f7f7f7]">
      {/* Header */}
      <div className="bg-white flex items-center gap-3 px-4 py-3 border-b">
        <button onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
          <img src="https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60" alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-bold text-sm text-[#1a1a2e]">Kelly_Tan</div>
          <div className="text-xs text-green-500">Online</div>
        </div>
        <div className="ml-auto flex gap-3">
          <button onClick={() => navigate('/forward')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#666" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
            {msg.from === 'them' && (
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2 flex-shrink-0 self-end">
                <img src="https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60" alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className={`max-w-[70%] px-3 py-2 rounded-2xl text-sm ${msg.from === 'me' ? 'bg-[#1e96fc] text-white rounded-br-sm' : 'bg-white text-[#1a1a2e] rounded-bl-sm shadow-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white border-t px-4 py-3 flex items-center gap-3 mb-16">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Type a message..."
          className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none"
        />
        <button
          onClick={send}
          className="w-10 h-10 bg-[#1e96fc] rounded-full flex items-center justify-center flex-shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      <BottomNavbar active="messages" />
    </div>
  );
}
