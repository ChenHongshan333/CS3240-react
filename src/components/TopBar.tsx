import { useNavigate } from 'react-router-dom';

const imgPropbankTransparent2 = "https://www.figma.com/api/mcp/asset/dcd8d5de-4e62-495b-9fdb-f8c6120a976c";

export default function TopBar({ showBack = true }: { showBack?: boolean }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f2f2f2] flex h-16 items-center justify-between px-6 w-full shrink-0">
      {showBack ? (
        <button onClick={() => navigate(-1)} className="size-4 relative cursor-pointer">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
            <path d="M10 13L5 8L10 3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      ) : (
        <div className="size-4" />
      )}
      <div className="h-6 w-[99px] overflow-hidden relative">
        <img alt="PropBank" className="absolute h-[335.57%] left-0 max-w-none top-[-116.78%] w-full" src={imgPropbankTransparent2} />
      </div>
      <button className="size-4 relative">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
          <rect y="3" width="16" height="1.5" rx="0.75" fill="black"/>
          <rect y="7.25" width="16" height="1.5" rx="0.75" fill="black"/>
          <rect y="11.5" width="16" height="1.5" rx="0.75" fill="black"/>
        </svg>
      </button>
    </div>
  );
}
