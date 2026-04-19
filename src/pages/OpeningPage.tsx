import { useNavigate } from 'react-router-dom';

const imgImage19 = "https://www.figma.com/api/mcp/asset/198679c9-6baf-43a0-9961-789fd3ee5d7c";
const imgImage17 = "https://www.figma.com/api/mcp/asset/e741f62f-5390-4a72-a7f7-904318d4d43c";
const imgImage22 = "https://www.figma.com/api/mcp/asset/de31d142-0862-46c2-98a9-738d72fb73c3";
const imgVector = "https://www.figma.com/api/mcp/asset/c53b9ea5-6358-41ee-a419-039420a3b530";

export default function OpeningPage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[393px] h-[852px] bg-white overflow-hidden">
      {/* Star logo */}
      <div className="absolute flex items-center justify-center left-[-79px] size-[524.35px] top-[29px]">
        <div className="-rotate-60 flex-none">
          <div className="overflow-clip relative size-[383.851px]">
            <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
            <div className="absolute" style={{left:'20.46%',right:'26.05%',top:'77.21px',bottom:'auto',aspectRatio:'1/1'}}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rotate-45" src={imgImage19} />
            </div>
            <div className="absolute" style={{left:'15.98%',right:'40.25%',top:'147.89px',aspectRatio:'1/1'}}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rotate-60" src={imgImage17} />
            </div>
            <div className="absolute" style={{left:'17.66%',right:'40.58%',top:'150.06px',aspectRatio:'160/212'}}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rotate-60" src={imgImage22} />
            </div>
          </div>
        </div>
      </div>
      {/* Welcome text */}
      <div className="absolute left-[36px] top-[456px] text-center">
        <p className="font-['PT_Sans',sans-serif] font-bold text-[24px] text-black leading-none mb-2">Exploring the app</p>
        <p className="font-['PT_Sans',sans-serif] text-[14px] text-black leading-5 w-[293px]">Your all-in-one cosplay &amp; ACGN application</p>
      </div>
      {/* Buttons */}
      <div className="absolute flex flex-col gap-[19px] items-start left-[57px] top-[543px] w-[267px]">
        <button
          onClick={() => navigate('/login')}
          className="bg-[#56b2ff] w-[267px] h-[50px] rounded-[10px] font-['PT_Sans',sans-serif] text-[20px] text-white text-center"
        >
          Log in
        </button>
        <button
          onClick={() => navigate('/register')}
          className="bg-[#a2d6f9] w-[267px] h-[50px] rounded-[10px] font-['PT_Sans',sans-serif] text-[20px] text-black text-center"
        >
          Create account
        </button>
      </div>
    </div>
  );
}
