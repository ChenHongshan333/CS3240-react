import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgPropbankTransparent2 = "https://www.figma.com/api/mcp/asset/dcd8d5de-4e62-495b-9fdb-f8c6120a976c";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');

  return (
    <div className="bg-white relative w-[393px] h-[852px] overflow-hidden">
      {/* TopBar */}
      <div className="absolute bg-[#f2f2f2] h-[66px] left-0 top-0 w-[393px] flex items-center px-6 gap-4">
        <button onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 13L5 8L10 3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex-1 flex justify-center">
          <div className="h-6 w-[99px] overflow-hidden relative">
            <img alt="PropBank" className="absolute h-[335.57%] left-0 max-w-none top-[-116.78%] w-full" src={imgPropbankTransparent2} />
          </div>
        </div>
        <div className="w-4" />
      </div>

      <div className="absolute left-[40px] top-[109px] w-[313px]">
        <p className="font-['PT_Sans',sans-serif] font-bold text-[24px] text-black mb-6">Forgot Password</p>
        <div className="mb-8">
          <input
            type="tel"
            placeholder="Mobile Number *"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            className="w-full font-['PT_Sans',sans-serif] text-[16px] text-black placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/login')}
            className="bg-[#1e96fc] h-[40px] w-[100px] rounded-[20px] font-['PT_Sans',sans-serif] text-[16px] text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
