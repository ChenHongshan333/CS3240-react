import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

export default function BorrowDetailPage() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('2026-04-10');
  const [endDate, setEndDate] = useState('2026-04-17');
  const [purpose, setPurpose] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24 space-y-4">
        <h1 className="text-xl font-bold text-[#1a1a2e]">Borrow Request</h1>

        {/* Item summary */}
        <div className="bg-white rounded-xl p-3 flex gap-3">
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <img src="https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00" alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1a1a2e]">Synthetic Heat-Resistant Wavy Wig, Light Blue</p>
            <p className="text-xs text-gray-500 mt-1">Borrow fee: $5/day</p>
            <p className="text-xs text-gray-500">Deposit: $20</p>
          </div>
        </div>

        {/* Date selection */}
        <div className="bg-white rounded-xl p-4 space-y-3">
          <div className="font-bold text-sm">Borrow Period</div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-gray-500">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-500">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>
          <div className="bg-[#e5f4fe] rounded-lg px-3 py-2 text-xs text-gray-600">
            Duration: 7 days · Total fee: $35 + $20 deposit
          </div>
        </div>

        {/* Purpose */}
        <div className="bg-white rounded-xl p-4">
          <div className="font-bold text-sm mb-2">Purpose of Borrowing</div>
          <textarea
            value={purpose}
            onChange={e => setPurpose(e.target.value)}
            placeholder="e.g. Cosplay event at AFA 2026..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm h-20 resize-none"
          />
        </div>

        {/* Conditions */}
        <div className="bg-white rounded-xl p-4">
          <div className="font-bold text-sm mb-2">Borrowing Conditions</div>
          <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
            <li>Item must be returned in original condition</li>
            <li>No permanent alterations allowed</li>
            <li>Deposit refunded upon safe return</li>
            <li>Late returns charged at $5/day extra</li>
          </ul>
          <label className="flex items-center gap-2 mt-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-xs text-gray-700">I agree to the borrowing conditions</span>
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="fixed bottom-16 left-0 right-0 max-w-[393px] mx-auto bg-white border-t px-4 py-3">
        <button
          onClick={() => navigate('/after-borrow-request')}
          disabled={!agreed}
          className="w-full bg-[#1e96fc] disabled:bg-gray-300 text-white py-3 rounded-xl font-bold text-lg"
        >
          Submit Borrow Request
        </button>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
