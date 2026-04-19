import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

const categories = ['All', 'Wigs', 'Costumes', 'Accessories', 'Shoes', 'Props'];

const items = [
  { id: 1, name: 'Synthetic Heat-Resistant Wavy Wig, Light Blue', price: '$14.76', seller: '@Kelly_Tan', img: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00', tags: ['Buy', 'Borrow'] },
  { id: 2, name: 'Classic Gothic Lolita Style Cosplay Wig, Green', price: '$23.68', seller: '@CosplayMaster', img: 'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced', tags: ['Buy', 'Swap'] },
  { id: 3, name: 'Violet Evergarden Cosplay Dress, Beige Size M', price: '$48.55', seller: '@AnimeShop', img: 'https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8', tags: ['Borrow'] },
  { id: 4, name: 'Cosmic Princess Kaguya Full Set', price: '$120.00', seller: '@PropBank', img: 'https://www.figma.com/api/mcp/asset/f2682172-d6ef-4747-9907-4bb51d7f4b60', tags: ['Buy', 'Borrow', 'Swap'] },
];

const tagColors: Record<string, string> = {
  Buy: 'bg-blue-100 text-blue-600',
  Borrow: 'bg-yellow-100 text-yellow-600',
  Swap: 'bg-green-100 text-green-600',
};

export default function SearchItemPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />

      {/* Search bar */}
      <div className="px-4 py-3 bg-white">
        <div className="flex items-center gap-2 bg-[#f7f7f7] rounded-xl px-3 py-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#999" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#999" strokeWidth="2" strokeLinecap="round"/></svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search items..."
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 px-4 py-2 overflow-x-auto scrollbar-hide bg-white border-b">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium ${activeCategory === cat ? 'bg-[#1e96fc] text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-4 py-3 pb-20 space-y-3">
        <div className="text-xs text-gray-500">{filtered.length} items found</div>
        {filtered.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm flex gap-3 p-3 cursor-pointer"
            onClick={() => navigate('/item-detail')}
          >
            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
              <img src={item.img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#1a1a2e] line-clamp-2">{item.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{item.seller}</p>
              <p className="text-base font-bold text-[#1e96fc] mt-1">{item.price}</p>
              <div className="flex gap-1 mt-1 flex-wrap">
                {item.tags.map(tag => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${tagColors[tag]}`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
