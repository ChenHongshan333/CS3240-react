import { useNavigate } from 'react-router-dom';

const imgPropbankTransparent2 = "https://www.figma.com/api/mcp/asset/dcd8d5de-4e62-495b-9fdb-f8c6120a976c";
const imgVector5 = "https://www.figma.com/api/mcp/asset/ad468d86-f91e-4094-946c-609861f0614e";
const imgImage19 = "https://www.figma.com/api/mcp/asset/83abc0cd-837d-4f8d-9da3-9894ce400b3a";
const imgImage17 = "https://www.figma.com/api/mcp/asset/9552e233-16f0-451e-859c-325b449bba49";
const imgImage22 = "https://www.figma.com/api/mcp/asset/b967e032-568d-4507-803f-0d831a07d18d";


export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[393px] h-[852px] bg-white overflow-hidden">
      {/* TopBar */}
      <div className="absolute bg-[#f2f2f2] h-[66px] left-0 top-0 w-[393px] flex items-center justify-center">
        <div className="h-6 w-[99px] overflow-hidden relative">
          <img alt="PropBank" className="absolute h-[335.57%] left-0 max-w-none top-[-116.78%] w-full" src={imgPropbankTransparent2} />
        </div>
      </div>

      {/* Welcome */}
      <div className="absolute text-center" style={{ left: '50%', transform: 'translateX(-50%)', top: '83px', width: '300px' }}>
        <p className="font-['PT_Sans',sans-serif] font-bold text-[24px] text-black">Welcome, User X!</p>
        <p className="font-['PT_Sans',sans-serif] text-[14px] text-[#666] leading-5">Click on stars to start</p>
      </div>

      {/* Central star logo */}
      <div className="absolute flex items-center justify-center" style={{ left: '-65px', top: '160px', width: '524px', height: '524px' }}>
        <div className="-rotate-60 flex-none">
          <div className="overflow-clip relative" style={{ width: '383px', height: '383px' }}>
            <div className="absolute" style={{ inset: '8.33% 8.33% 12.5% 8.33%' }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
            </div>
            <div className="absolute rotate-45" style={{ left: '20.46%', right: '26.05%', top: '77px', aspectRatio: '1' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage19} />
            </div>
            <div className="absolute rotate-60" style={{ left: '15.98%', right: '40.25%', top: '148px', aspectRatio: '1' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage17} />
            </div>
            <div className="absolute rotate-60" style={{ left: '17.66%', right: '40.58%', top: '150px', aspectRatio: '160/212' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage22} />
            </div>
          </div>
        </div>
      </div>

      {/* Clickable stars */}
      <button onClick={() => navigate('/marketplace')} className="absolute cursor-pointer" style={{ left: '20px', top: '595px', width: '104px', height: '103px' }}>
        <img alt="Market" className="size-full object-contain" src="https://www.figma.com/api/mcp/asset/954f834d-b3f7-4dad-9788-2a637951f99b" />
      </button>
      <button onClick={() => navigate('/marketplace')} className="absolute cursor-pointer" style={{ left: '299px', top: '234px', width: '78px', height: '78px' }}>
        <img alt="News" className="size-full object-contain" src="https://www.figma.com/api/mcp/asset/5c129c21-ad12-4fa4-b6a8-6d52925eb48c" />
      </button>
      <button onClick={() => navigate('/marketplace')} className="absolute cursor-pointer" style={{ left: '-20px', top: '143px', width: '181px', height: '182px' }}>
        <img alt="Create" className="size-full object-contain" src="https://www.figma.com/api/mcp/asset/99eeb136-6da1-4869-a446-d0731d189997" />
      </button>
      <button onClick={() => navigate('/marketplace')} className="absolute cursor-pointer" style={{ left: '224px', top: '582px', width: '150px', height: '155px' }}>
        <img alt="Scan" className="size-full object-contain" src="https://www.figma.com/api/mcp/asset/3de523da-8448-4706-a8fe-3e31a6d822e5" />
      </button>
      <button onClick={() => navigate('/marketplace')} className="absolute cursor-pointer" style={{ left: '103px', top: '699px', width: '78px', height: '76px' }}>
        <img alt="Creator" className="size-full object-contain" src="https://www.figma.com/api/mcp/asset/0d7cf3ab-428b-444f-b56f-0e09c1a752c5" />
      </button>
    </div>
  );
}
