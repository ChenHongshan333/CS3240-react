import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import TopBar from '../components/TopBar';

const cartItems = [
  { img: "https://www.figma.com/api/mcp/asset/0f9015a3-5892-4995-a490-50f6fc67cf6c", name: 'Blonde Synthetic Short Men Straight Wigs', price: 15.98, qty: 1, seller: 'Kelly' },
  { img: "https://www.figma.com/api/mcp/asset/ebf6d581-b7f5-4e9a-aeee-73ab39b16c2d", name: 'LarpGears 2 Pack Fake Sword Prop', price: 43.45, qty: 2, seller: 'Larp' },
];

export default function CartPage() {
  const navigate = useNavigate();
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div className="relative w-[393px] h-[852px] bg-[#f7f7f7] overflow-hidden flex flex-col justify-between">
      <TopBar />

      {/* Tabs */}
      <div className="bg-transparent px-4 pt-2 pb-0">
        <div className="flex gap-12 text-[16px] font-['PT_Sans',sans-serif]">
          <button onClick={() => navigate('/shop')} className="text-black">Shop</button>
          <span className="text-black font-bold border-b-2 border-black pb-1 cursor-pointer">Cart</span>
          <button onClick={() => navigate('/messages')} className="text-black">Messages</button>
          <button className="text-black">Orders</button>
        </div>
      </div>

      {/* Cart items */}
      <div className="flex-1 overflow-y-auto px-4 mt-4 pb-4">
        <div className="flex flex-col gap-3">
          {cartItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-3 flex gap-3 shadow">
              <img src={item.img} alt={item.name} className="size-20 object-cover rounded-xl shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-['PT_Sans',sans-serif] text-[14px] text-black line-clamp-2">{item.name}</p>
                <p className="font-['PT_Sans',sans-serif] text-[12px] text-[#9c9c9c]">Seller: {item.seller}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black">$ {(item.price * item.qty).toFixed(2)}</p>
                  <div className="flex items-center gap-2">
                    <button className="size-6 rounded-full bg-[#f2f2f2] flex items-center justify-center text-black font-bold">-</button>
                    <span className="font-['PT_Sans',sans-serif] text-[14px]">{item.qty}</span>
                    <button className="size-6 rounded-full bg-[#1e96fc] flex items-center justify-center text-white font-bold">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total + Checkout */}
      <div className="bg-white px-4 py-4 border-t border-[#d9d9d9]">
        <div className="flex justify-between mb-3">
          <span className="font-['PT_Sans',sans-serif] text-[16px] text-black">Total</span>
          <span className="font-['PT_Sans',sans-serif] font-bold text-[16px] text-black">$ {total.toFixed(2)}</span>
        </div>
        <button
          onClick={() => navigate('/order-detail')}
          className="w-full bg-[#1e96fc] h-[50px] rounded-xl font-['PT_Sans',sans-serif] text-[18px] text-white font-bold"
        >
          Checkout
        </button>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
