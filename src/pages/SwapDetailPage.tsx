import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

export default function SwapDetailPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24 space-y-4">
        <h1 className="text-xl font-bold text-[#1a1a2e]">Swap Request</h1>

        {/* Their item */}
        <div className="bg-white rounded-xl p-3">
          <div className="text-xs text-gray-500 mb-2">Item you want</div>
          <div className="flex gap-3">
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
              <img src="https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8" alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a1a2e]">Violet Evergarden Cosplay Dress</p>
              <p className="text-xs text-gray-500 mt-1">Color: Beige · Size: M</p>
              <p className="text-xs text-[#1e96fc] font-bold mt-1">$48.55</p>
            </div>
          </div>
        </div>

        {/* My item */}
        <div className="bg-white rounded-xl p-3">
          <div className="text-xs text-gray-500 mb-2">Item you offer</div>
          <div className="flex gap-3">
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
              <img src="https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced" alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a1a2e]">Gothic Lolita Cosplay Wig, Green</p>
              <p className="text-xs text-gray-500 mt-1">44 inches · DM663-Green</p>
              <p className="text-xs text-[#1e96fc] font-bold mt-1">$23.68</p>
            </div>
          </div>
          <button className="mt-2 text-xs text-[#1e96fc] underline">Change item</button>
        </div>

        {/* Message */}
        <div className="bg-white rounded-xl p-4">
          <div className="font-bold text-sm mb-2">Message to Owner</div>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Explain why you'd like to swap..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm h-20 resize-none"
          />
        </div>

        {/* Conditions */}
        <div className="bg-white rounded-xl p-4">
          <div className="font-bold text-sm mb-2">Swap Conditions</div>
          <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
            <li>Both items must be in good condition</li>
            <li>Shipping costs borne by each party</li>
            <li>Swap confirmed only after both parties agree</li>
            <li>No monetary exchange unless agreed</li>
          </ul>
          <label className="flex items-center gap-2 mt-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-xs text-gray-700">I agree to the swap conditions</span>
          </label>
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 max-w-[393px] mx-auto bg-white border-t px-4 py-3">
        <button
          onClick={() => navigate('/after-swap-request')}
          disabled={!agreed}
          className="w-full bg-[#1e96fc] disabled:bg-gray-300 text-white py-3 rounded-xl font-bold text-lg"
        >
          Submit Swap Request
        </button>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
