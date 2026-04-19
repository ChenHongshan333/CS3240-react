import { useNavigate } from 'react-router-dom';

const starImg = 'https://www.figma.com/api/mcp/asset/f278c0b5-6b9f-406a-b4ef-cd0a859f20fe';

export default function LandingPageNew() {
  const navigate = useNavigate();

  return (
    <div className="page-container bg-white overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-center h-16 bg-[#f2f2f2] flex-shrink-0">
        <span className="font-bold text-xl text-[#1a1a2e] tracking-widest">PROP<span className="text-red-500">BANK</span></span>
      </div>

      <div className="flex-1 relative overflow-hidden">
        {/* Welcome text */}
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold text-[#1a1a2e]">Welcome, User X!</h1>
          <p className="text-sm text-gray-400 mt-1">Click on stars to start</p>
        </div>

        {/* Central large star - MarketPlace */}
        <button
          onClick={() => navigate('/marketplace')}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 200, height: 200 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full h-full bg-yellow-400" style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            }}/>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={starImg} alt="" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <span className="font-bold text-lg text-[#1a1a2e] mt-1 block">MarketPlace</span>
        </button>

        {/* Top right - CoNews */}
        <button
          className="absolute right-8 top-32"
          style={{ width: 80, height: 80 }}
        >
          <div className="w-full h-full bg-yellow-400" style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}/>
          <span className="font-bold text-xs text-[#1a1a2e] block text-center -mt-2">CoNews</span>
        </button>

        {/* Left - PropScan */}
        <button
          className="absolute left-4 bottom-48"
          style={{ width: 110, height: 110 }}
        >
          <div className="w-full h-full bg-yellow-400" style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}/>
          <span className="font-bold text-sm text-[#1a1a2e] block text-center -mt-3">PropScan</span>
        </button>

        {/* Bottom right - Workshop */}
        <button
          className="absolute right-4 bottom-32"
          style={{ width: 160, height: 160 }}
        >
          <div className="w-full h-full bg-yellow-400" style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}/>
          <span className="font-bold text-base text-[#1a1a2e] block text-center -mt-4">Workshop</span>
        </button>

        {/* Bottom center - CreatorHub */}
        <button
          className="absolute left-1/3 bottom-16"
          style={{ width: 76, height: 76 }}
        >
          <div className="w-full h-full bg-yellow-400" style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}/>
          <span className="font-bold text-xs text-[#1a1a2e] block text-center -mt-2">CreatorHub</span>
        </button>
      </div>
    </div>
  );
}
