import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const imgPasswordUnhash = "https://www.figma.com/api/mcp/asset/77ce4943-cbcd-4535-ae63-640bb07815f1";
const imgPropbankTransparent2 = "https://www.figma.com/api/mcp/asset/dcd8d5de-4e62-495b-9fdb-f8c6120a976c";
const imgGroup = "https://www.figma.com/api/mcp/asset/c312f746-0e25-4789-bdc9-5d14f6e343cb";
const imgRectangle479 = "https://www.figma.com/api/mcp/asset/971f53d5-0a6d-45ff-9892-b34f33e52709";
const imgRectangle480 = "https://www.figma.com/api/mcp/asset/90afbe8e-8a4f-44f4-965a-a80dd4fd89a4";
const imgVector = "https://www.figma.com/api/mcp/asset/2cc948d4-b019-44a7-b3e7-d904391186cf";

export default function LoginPage() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="bg-white relative w-[393px] h-[852px] overflow-hidden">
      {/* TopBar */}
      <div className="absolute bg-[#f2f2f2] h-[66px] left-0 top-0 w-[393px] flex items-center justify-center">
        <div className="h-6 w-[99px] overflow-hidden relative">
          <img alt="PropBank" className="absolute h-[335.57%] left-0 max-w-none top-[-116.78%] w-full" src={imgPropbankTransparent2} />
        </div>
      </div>

      {/* Login Detail */}
      <div className="absolute left-[40px] top-[109px]">
        <p className="font-['PT_Sans',sans-serif] font-bold text-[24px] text-black mb-6">Log in</p>

        {/* Mobile input */}
        <div className="w-[313px] mb-6">
          <input
            type="tel"
            placeholder="Mobile Number *"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            className="w-full font-['PT_Sans',sans-serif] text-[16px] text-black placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent"
          />
        </div>

        {/* Password input */}
        <div className="w-[313px] mb-4 relative">
          <input
            type={showPwd ? 'text' : 'password'}
            placeholder="Password *"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full font-['PT_Sans',sans-serif] text-[16px] text-black placeholder-black/30 outline-none pb-2 border-b border-[#d9d9d9] bg-transparent pr-10"
          />
          <button onClick={() => setShowPwd(!showPwd)} className="absolute right-0 top-0 size-[30px]">
            <img alt="" className="size-full" src={imgPasswordUnhash} />
          </button>
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between w-[313px] mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setRemember(!remember)}
              className={`size-[25px] border border-black rounded-[5px] flex items-center justify-center ${remember ? 'bg-[#1e96fc]' : 'bg-white'}`}
            >
              {remember && <span className="text-white text-xs">✓</span>}
            </button>
            <span className="font-['PT_Sans',sans-serif] text-[14px] text-black">Remember me</span>
          </div>
          <button onClick={() => navigate('/forgot-password')} className="font-['PT_Sans',sans-serif] font-bold text-[14px] text-[#1e96fc]">
            Forgot Password?
          </button>
        </div>

        {/* Log in button */}
        <div className="flex justify-center w-[313px] mb-4">
          <button
            onClick={() => navigate('/landing')}
            className="bg-[#1e96fc] h-[40px] w-[100px] rounded-[20px] font-['PT_Sans',sans-serif] text-[16px] text-white"
          >
            Log in
          </button>
        </div>

        {/* New here */}
        <div className="flex justify-center w-[313px] mb-8">
          <span className="font-['PT_Sans',sans-serif] text-[14px] text-black">New here? </span>
          <button onClick={() => navigate('/register')} className="font-['PT_Sans',sans-serif] font-bold text-[14px] text-[#1e96fc] ml-1">Join Now</button>
        </div>
      </div>

      {/* Other login methods */}
      <div className="absolute left-[40px] top-[488px] flex flex-col gap-5 w-[313px]">
        <button className="relative h-[50px] w-full">
          <img alt="Sign in with Apple" className="absolute block inset-0 max-w-none size-full" src={imgRectangle479} />
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            <img alt="" className="size-[26px]" src={imgVector} />
            <span className="font-['PT_Sans',sans-serif] text-[16px] text-black">Log in with Apple</span>
          </div>
        </button>
        <button className="relative h-[50px] w-full">
          <img alt="Sign in with Google" className="absolute block inset-0 max-w-none size-full" src={imgRectangle480} />
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            <img alt="" className="size-[35px]" src={imgGroup} />
            <span className="font-['PT_Sans',sans-serif] text-[16px] text-black">Log in with Google</span>
          </div>
        </button>
      </div>
    </div>
  );
}
