import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import TopBar from '../components/TopBar';

const plans = [
  {
    id: 1,
    title: 'Cosmic Princess Kaguya',
    description: 'For Cosplaying Iroha',
    marketCost: '$--',
    marketDays: '--',
    workshopCost: '$150',
    workshopTime: '5 hours',
    img: 'https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60',
  },
  {
    id: 2,
    title: 'Plan A',
    description: 'Some placeholder description text',
    marketCost: '$200',
    marketDays: '6 Days',
    workshopCost: '$80',
    workshopTime: '18 hours',
    img: 'https://www.figma.com/api/mcp/asset/4d3c4a4a-aca1-4b04-95a7-955d47552502',
  },
  {
    id: 3,
    title: 'Plan B',
    description: 'Some placeholder description text',
    marketCost: '$--',
    marketDays: '--',
    workshopCost: '$67',
    workshopTime: '9 hours',
    img: 'https://www.figma.com/api/mcp/asset/4d3c4a4a-aca1-4b04-95a7-955d47552502',
  },
];

export default function ExistingPlanPage() {
  const navigate = useNavigate();
  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />

      <h1 className="text-2xl font-bold text-center py-3 text-[#1a1a2e]">Your Cosplay Plans</h1>

      <div className="flex-1 overflow-y-auto px-4 pb-20 space-y-4">
        {plans.map(plan => (
          <div key={plan.id} className="bg-white rounded-xl shadow-md overflow-hidden p-3">
            {/* Header */}
            <div className="flex gap-3 items-start">
              <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img src={plan.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-end gap-3 mb-1">
                  <button className="text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#666" strokeWidth="2" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#666" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                  <button className="text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polyline points="3 6 5 6 21 6" stroke="#666" strokeWidth="2" strokeLinecap="round"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" stroke="#666" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                </div>
                <div className="font-bold text-xl text-center text-[#1a1a2e]">{plan.title}</div>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-center mt-1 mb-2">{plan.description}</p>

            {/* Comparison */}
            <div className="border border-[#627efb] rounded-xl flex">
              <div className="flex-1 p-3 space-y-2">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-lg">🛒</span>
                  <span className="text-sm">{plan.marketCost}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-lg">🚚</span>
                  <span className="text-sm">{plan.marketDays}</span>
                </div>
              </div>
              <div className="w-px bg-gray-200 my-3"/>
              <div className="flex-1 p-3 space-y-2">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-lg">🔧</span>
                  <span className="text-sm">{plan.workshopCost}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-lg">⏰</span>
                  <span className="text-sm">{plan.workshopTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add plan button */}
        <button
          onClick={() => navigate('/plan-creation')}
          className="w-full bg-[#1e96fc] text-white py-3 rounded-xl font-semibold"
        >
          + New Plan
        </button>
      </div>

      <BottomNavbar active="workshop" />
    </div>
  );
}
