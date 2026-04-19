import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import TopBar from '../components/TopBar';

const imgItemPicture = "https://www.figma.com/api/mcp/asset/0f9015a3-5892-4995-a490-50f6fc67cf6c";
const imgItemPicture1 = "https://www.figma.com/api/mcp/asset/178064ca-cd0b-4428-8948-b8a6d7b92b31";
const imgItemPicture2 = "https://www.figma.com/api/mcp/asset/ebf6d581-b7f5-4e9a-aeee-73ab39b16c2d";
const imgItemPicture3 = "https://www.figma.com/api/mcp/asset/e06bf977-0a53-480a-a05b-d7a70040547d";

const categories = ['All', 'Makeup', 'Male', 'Weapons', 'Wigs', 'Costumes', 'Accessories', 'Female'];

const items = [
  { img: imgItemPicture, price: '$ 15.98', seller: 'Kelly', rating: '4.8/5.0', name: 'Blonde Synthetic Short Men Straight Wigs' },
  { img: imgItemPicture1, price: '$ 69.99', seller: 'Hari', rating: '4.2/5.0', name: "iSHOWcos Women's Breath Wild Princess Link" },
  { img: imgItemPicture3, price: '$ 189.9', seller: 'Hyrule', rating: '4.9/5.0', name: 'Halloween Carnival Party Outfit For Women' },
  { img: imgItemPicture2, price: '$ 43.45', seller: 'Larp', rating: '4.4/5.0', name: 'LarpGears 2 Pack Fake Sword Prop' },
];

export default function ShopSearchPage() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[393px] h-[852px] bg-[#f7f7f7] overflow-hidden flex flex-col justify-between">
      <TopBar />

      {/* Tabs */}
      <div className="bg-transparent px-4 pt-2 pb-0">
        <div className="flex gap-12 text-[16px] font-['PT_Sans',sans-serif]">
          <span className="text-black font-bold border-b-2 border-black pb-1 cursor-pointer">Shop</span>
          <button onClick={() => navigate('/cart')} className="text-black">Cart</button>
          <button onClick={() => navigate('/messages')} className="text-black">Messages</button>
          <button className="text-black">Orders</button>
        </div>
      </div>

      {/* Searchbar */}
      <div className="bg-white mx-4 mt-2 px-3 py-2 rounded-xl flex items-center gap-2">
        <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#9c9c9c" strokeWidth="2"/>
          <path d="M16.5 16.5L21 21" stroke="#9c9c9c" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <input placeholder="Search items..." className="outline-none bg-transparent font-['PT_Sans',sans-serif] text-[16px] text-black w-full placeholder-[#9c9c9c]" />
      </div>

      {/* Categories */}
      <div className="px-4 pt-3 pb-2">
        <p className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black mb-2">Categories</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`h-[30px] px-4 rounded-xl text-[12px] font-['PT_Sans',sans-serif] ${i === 0 ? 'bg-[#1e96fc] text-white font-bold' : 'bg-white border border-[#a2d6f9] text-[#627efb]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Items grid */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="grid grid-cols-2 gap-2">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-[15px] shadow p-2 cursor-pointer">
              <div className="rounded-[10px] overflow-hidden aspect-square mb-2 bg-white">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black">{item.price}</p>
              <div className="flex items-center gap-1 text-[10px] text-black mb-1">
                <span>👤 {item.seller}</span>
                <span>⭐ {item.rating}</span>
              </div>
              <p className="font-['PT_Sans',sans-serif] text-[12px] text-black line-clamp-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
