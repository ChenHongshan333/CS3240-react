import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import TopBar from '../components/TopBar';

const imgGemini = "https://www.figma.com/api/mcp/asset/fcb6dff7-bdb5-4444-8c6a-6dda5a8d8ce7";
const imgBuy = "https://www.figma.com/api/mcp/asset/260cfebf-4644-49e8-a7a8-c41357816681";
const imgSell = "https://www.figma.com/api/mcp/asset/d34fc327-f55b-444e-abe8-d58a9a47c975";
const imgBorrow = "https://www.figma.com/api/mcp/asset/98bb10f5-2558-479d-b090-25130fdc120c";
const imgRent = "https://www.figma.com/api/mcp/asset/65541700-a8de-47f3-b0cc-5098d13ff232";
const imgSwap = "https://www.figma.com/api/mcp/asset/38d020d5-54d8-4594-b231-fb37a8995432";

export default function MarketplacePage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[393px] h-[852px] bg-[#f7f7f7] overflow-hidden flex flex-col justify-between">
      <TopBar showBack={false} />

      {/* Content */}
      <div className="flex-1 relative">
        {/* Character */}
        <div className="absolute" style={{ left: '61px', top: '229px', width: '266px', height: '266px' }}>
          <img alt="Character" className="size-full object-cover" src={imgGemini} />
        </div>

        {/* Buy bubble */}
        <button onClick={() => navigate('/shop')} className="absolute cursor-pointer overflow-clip" style={{ left: '209px', top: '71px', width: '170px', height: '170px' }}>
          <img alt="Buy" className="size-full object-contain" src={imgBuy} />
          <span className="absolute inset-0 flex items-center justify-center font-['PT_Sans',sans-serif] font-bold text-[28px] text-black">Buy</span>
        </button>

        {/* Sell bubble */}
        <button className="absolute cursor-pointer overflow-clip" style={{ left: '23px', top: '154px', width: '114px', height: '114px' }}>
          <img alt="Sell" className="size-full object-contain" src={imgSell} />
          <span className="absolute inset-0 flex items-center justify-center font-['PT_Sans',sans-serif] font-bold text-[20px] text-white">Sell</span>
        </button>

        {/* Borrow bubble */}
        <button className="absolute cursor-pointer overflow-clip" style={{ left: '280px', top: '241px', width: '95px', height: '95px' }}>
          <img alt="Borrow" className="size-full object-contain" src={imgBorrow} />
          <span className="absolute inset-0 flex items-center justify-center font-['PT_Sans',sans-serif] font-bold text-[16px] text-white">Borrow</span>
        </button>

        {/* Rent bubble */}
        <button className="absolute cursor-pointer overflow-clip" style={{ left: '67px', top: '516px', width: '75px', height: '75px' }}>
          <img alt="Rent" className="size-full object-contain" src={imgRent} />
          <span className="absolute inset-0 flex items-center justify-center font-['PT_Sans',sans-serif] font-bold text-[14px] text-white">Rent</span>
        </button>

        {/* Swap bubble */}
        <button className="absolute cursor-pointer overflow-clip" style={{ left: '205px', top: '537px', width: '132px', height: '132px' }}>
          <img alt="Swap" className="size-full object-contain" src={imgSwap} />
          <span className="absolute inset-0 flex items-center justify-center font-['PT_Sans',sans-serif] font-bold text-[24px] text-white">Swap</span>
        </button>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
