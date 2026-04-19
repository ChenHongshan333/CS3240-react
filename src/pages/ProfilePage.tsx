import BottomNavbar from '../components/BottomNavbar';
import TopBar from '../components/TopBar';

const imgItemBriefPic = "https://www.figma.com/api/mcp/asset/3f08fbbc-ae3e-4664-9a4a-943b943286aa";
const items = [
  { img: "https://www.figma.com/api/mcp/asset/dcd7f80f-d4c0-40dd-8219-c5ee09879755", price: '$ 69.99', name: "BanG Dream! Ave Mujica Wakaba Mutsumi Dress" },
  { img: "https://www.figma.com/api/mcp/asset/43af5c4c-2266-4226-bd5b-0e05437444ca", price: '$ 10.98', name: 'HIROAKIYA Asa Mitaka Wig' },
  { img: "https://www.figma.com/api/mcp/asset/906e5cbb-2744-4f31-b7dc-cb6efdaabbe0", price: '$ 13.98', name: 'Chainsaw Man Cosplay Wig with Wig Cap' },
  { img: "https://www.figma.com/api/mcp/asset/43af5c4c-2266-4226-bd5b-0e05437444ca", price: '$ 10.98', name: 'HIROAKIYA Asa Mitaka Wig' },
];

const tabs = ['My items', 'Publish', 'Profile', 'Messages', 'Orders'];
const filterTabs = ['Selling (19)', 'Renting (3)', 'Sold (376)', 'Review (560)'];
const tags = ['# wig', '# hand-made', '# Aikatsu', '# Selling', '# Chainsaw Man'];

export default function ProfilePage() {
  
  return (
    <div className="relative w-[393px] h-[852px] bg-[#f7f7f7] overflow-hidden flex flex-col justify-between">
      <TopBar />

      {/* Sub-tabs */}
      <div className="bg-transparent px-2 pt-0 pb-0 flex gap-6 text-[16px] font-['PT_Sans',sans-serif] overflow-x-auto">
        {tabs.map((t, i) => (
          <button key={t} className={`whitespace-nowrap pb-1 ${i === 2 ? 'text-black font-bold border-b-2 border-black' : 'text-black'}`}>{t}</button>
        ))}
      </div>

      {/* Searchbar */}
      <div className="bg-white mx-4 mt-2 px-3 py-2 rounded-xl flex items-center gap-2">
        <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#9c9c9c" strokeWidth="2"/>
          <path d="M16.5 16.5L21 21" stroke="#9c9c9c" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="font-['PT_Sans',sans-serif] text-[16px] text-[#9c9c9c]">Search selling items</span>
      </div>

      {/* Profile info */}
      <div className="flex gap-4 px-4 mt-3">
        <div className="w-[182px] h-[179px] rounded-xl overflow-hidden shrink-0 shadow">
          <img src={imgItemBriefPic} alt="Profile" className="size-full object-cover" />
        </div>
        <div className="flex flex-col gap-1 text-[16px] font-['PT_Sans',sans-serif] text-black">
          <p>👤 @Hongshan</p>
          <p>📍 Singapore</p>
          <p>⭐ 4.8/5.0 (900)</p>
          <p>✍️ しあわせになろうよ</p>
          <div className="border border-black rounded-xl px-3 py-0.5 mt-1 text-sm">Follower: 293</div>
          <div className="border border-black rounded-xl px-3 py-0.5 text-sm">Following: 30</div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 px-4 mt-3">
        {filterTabs.map(t => (
          <button key={t} className="h-[30px] px-3 rounded-full border border-[#a2d6f9] text-[14px] text-[#627efb] font-['PT_Sans',sans-serif] bg-white">{t}</button>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 px-4 mt-2">
        {tags.map(t => (
          <span key={t} className="h-[26px] px-3 rounded-full border border-[#5a5a5a] text-[14px] text-[#5a5a5a] font-['PT_Sans',sans-serif] flex items-center">{t}</span>
        ))}
      </div>

      {/* Items grid */}
      <div className="flex-1 overflow-y-auto px-4 mt-2 pb-2">
        <div className="grid grid-cols-2 gap-2">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-[15px] shadow p-2 cursor-pointer">
              <div className="rounded-xl overflow-hidden aspect-square mb-2 bg-white">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black">{item.price}</p>
              <p className="font-['PT_Sans',sans-serif] text-[12px] text-black line-clamp-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
