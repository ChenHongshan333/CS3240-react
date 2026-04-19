import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgPropbankTransparent2 = "https://www.figma.com/api/mcp/asset/dcd8d5de-4e62-495b-9fdb-f8c6120a976c";
const imgPasswordUnhash = "https://www.figma.com/api/mcp/asset/b69ab1c4-d137-4600-9a3b-0d40dc1872f5";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

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

      {/* Form */}
      <div className="absolute left-[40px] top-[109px] w-[313px]">
        <p className="font-['PT_Sans',sans-serif] font-bold text-[24px] text-black mb-6">Create an Account</p>

        {[
          { label: 'Name *', type: 'text' },
          { label: 'Gender', type: 'text' },
        ].map(f => (
          <div key={f.label} className="mb-6">
            <input placeholder={f.label} type={f.type} className="w-full font-['PT_Sans',sans-serif] text-[16px] text-black placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent" />
          </div>
        ))}

        <div className="flex gap-4 mb-6">
          <input placeholder="Month of Birth*" className="w-1/2 font-['PT_Sans',sans-serif] text-[16px] text-black placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent" />
          <input placeholder="Year of Birth*" className="w-1/2 font-['PT_Sans',sans-serif] text-[16px] text-black placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent" />
        </div>

        {[
          { label: 'Mobile Number *', type: 'tel' },
          { label: 'Email', type: 'email' },
        ].map(f => (
          <div key={f.label} className="mb-6">
            <input placeholder={f.label} type={f.type} className="w-full font-['PT_Sans',sans-serif] text-[16px] text-black placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent" />
          </div>
        ))}

        {/* Password */}
        <div className="mb-6 relative">
          <input type="password" placeholder="Password *" className="w-full font-['PT_Sans',sans-serif] text-[16px] placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent pr-10" />
          <button className="absolute right-0 top-0 size-[30px]">
            <img alt="" className="size-full" src={imgPasswordUnhash} />
          </button>
        </div>

        {/* Confirm Password */}
        <div className="mb-3 relative">
          <input type="password" placeholder="Confirm Password *" className="w-full font-['PT_Sans',sans-serif] text-[16px] placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent pr-10" />
          <button className="absolute right-0 top-0 size-[30px]">
            <img alt="" className="size-full" src={imgPasswordUnhash} />
          </button>
        </div>

        <p className="font-['PT_Sans',sans-serif] text-[12px] text-black mb-4">
          Password must contain at least 1 uppercase, 1 lowercase, 1 number and must be between 8 - 15 characters in length
        </p>

        {/* Terms */}
        <div className="flex gap-3 mb-6 items-start">
          <button onClick={() => setAgreed(!agreed)} className={`size-5 mt-0.5 border border-black rounded flex items-center justify-center shrink-0 ${agreed ? 'bg-[#1e96fc]' : 'bg-white'}`}>
            {agreed && <span className="text-white text-xs">✓</span>}
          </button>
          <p className="font-['PT_Sans',sans-serif] text-[14px] text-black">
            I agree to receive marketing and promotional information from PropBank, and have read and accept the Terms & Conditions and Privacy Policy.
          </p>
        </div>

        {/* Sign Up */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/landing')}
            className="bg-[#1e96fc] h-[40px] w-[100px] rounded-[20px] font-['PT_Sans',sans-serif] text-[16px] text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
