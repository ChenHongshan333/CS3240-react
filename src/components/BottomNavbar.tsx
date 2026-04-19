const imgGroup = "https://www.figma.com/api/mcp/asset/6f6855e4-7d99-4a23-a7cf-dc58d7e9acb0";
const imgVector81 = "https://www.figma.com/api/mcp/asset/850588fc-01f9-48b4-a604-e03988f87139";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/b94e42a4-4866-48b4-b71b-46f6002b6a0a";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/eec245bc-2f1e-4f05-a391-3e005aad9c8f";
const imgVector82 = "https://www.figma.com/api/mcp/asset/b8cc7997-3de0-446b-bd0f-64b75ef7d317";

export default function BottomNavbar({ active }: { active?: string }) {
  return (
    <div className="bg-[rgba(242,242,242,0.8)] border-2 border-[#d5d5d5] border-solid flex h-16 items-center justify-between px-6 py-4 rounded-xl w-full">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="h-[18px] relative w-[15.339px]">
          <div className="absolute inset-[-5.56%_-6.52%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup} />
          </div>
        </div>
        <p className={`font-['PT_Sans',sans-serif] text-xs text-center ${active === 'trade' ? 'text-black font-bold' : 'text-[#9c9c9c]'}`}>Trade</p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="relative size-5">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector81} />
        </div>
        <p className={`font-['PT_Sans',sans-serif] text-xs text-center ${active === 'news' ? 'text-black font-bold' : 'text-[#9c9c9c]'}`}>News</p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="overflow-clip relative size-6">
          <div className="absolute inset-[8.33%_8.33%_0.78%_8.73%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
          </div>
        </div>
        <p className={`font-['PT_Sans',sans-serif] text-xs text-center ${active === 'propscan' ? 'text-black font-bold' : 'text-[#9c9c9c]'}`}>PropScan</p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="h-[14px] relative w-[18px]">
          <div className="absolute inset-[-7.14%_-5.56%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup2} />
          </div>
        </div>
        <p className={`font-['PT_Sans',sans-serif] text-xs text-center ${active === 'workshop' ? 'text-black font-bold' : 'text-[#9c9c9c]'}`}>Workshop</p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="h-4 relative w-5">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector82} />
        </div>
        <p className={`font-['PT_Sans',sans-serif] text-xs text-center ${active === 'social' ? 'text-black font-bold' : 'text-[#9c9c9c]'}`}>Social</p>
      </div>
    </div>
  );
}
