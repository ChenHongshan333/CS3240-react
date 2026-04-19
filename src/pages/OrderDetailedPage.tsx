import { useNavigate } from 'react-router-dom';
import BottomNavbar from '../components/BottomNavbar';
import TopBar from '../components/TopBar';

const orderItems = [
  {
    id: 1,
    name: 'Synthetic Heat-Resistant Wavy Wig, Light Blue, Natural And Realistic Fake Wig',
    price: '$14.76',
    qty: 1,
    detail: 'Wig size: 28 inches',
    delivery: 'Express delivery (by plane)',
    remark: 'None',
    status: 'Buy',
    statusColor: 'bg-blue-500',
    img: 'https://www.figma.com/api/mcp/asset/226ed986-b742-4baa-9670-7f487bb04b00',
  },
  {
    id: 2,
    name: 'Classic Fashion Gothic Lolita Style Cosplay Wig, Straight Synthetic Heat-Resistant Hair',
    price: '$23.68',
    qty: 1,
    detail: '44 inches; DM663-Green',
    delivery: 'Express delivery (by ship); Before 2026/4/10',
    remark: 'None',
    status: 'Buy',
    statusColor: 'bg-blue-500',
    img: 'https://www.figma.com/api/mcp/asset/b65a5b8e-0434-4485-a054-7b918ec0dced',
  },
  {
    id: 3,
    name: 'Violet Cosplay Violet Evergarden Role Play Comic Con Wigs Coser Dress',
    price: '$48.55',
    qty: 1,
    detail: 'Color: Beige; Size: M',
    delivery: 'Express delivery (by ship); Before 2026/4/10',
    remark: 'None',
    status: 'Borrow (Approved)',
    statusColor: 'bg-yellow-400',
    img: 'https://www.figma.com/api/mcp/asset/3943b707-336f-46e7-8946-da354a3485b8',
  },
];

const paymentMethods = [
  { id: 1, label: 'PayNow', img: 'https://www.figma.com/api/mcp/asset/5b915180-2a79-4e6d-8712-0f7eae58dc73' },
  { id: 2, label: 'Apple Pay', img: 'https://www.figma.com/api/mcp/asset/e6aecd4f-4c77-4c37-aa83-b5f87aafca8f' },
  { id: 3, label: 'Mastercard', img: 'https://www.figma.com/api/mcp/asset/6f6b93f9-2cd7-4626-b815-be885872920d' },
  { id: 4, label: 'Visa', img: 'https://www.figma.com/api/mcp/asset/8db29c81-a300-4349-977f-e0c1e1a67e10' },
  { id: 5, label: 'Other', img: 'https://www.figma.com/api/mcp/asset/1b28b531-88c0-4f29-b4f0-f543146e9779' },
];

export default function OrderDetailedPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container bg-[#f7f7f7]">
      <TopBar showBack />

      {/* Shop tabs */}
      <div className="bg-white flex border-b px-4 text-sm text-gray-700">
        {['Shop', 'Cart', 'Messages', 'Orders'].map(t => (
          <button
            key={t}
            onClick={() => { if (t === 'Shop') navigate('/shop'); if (t === 'Cart') navigate('/cart'); if (t === 'Messages') navigate('/messages'); if (t === 'Orders') navigate('/order'); }}
            className={`mr-8 py-3 ${t === 'Orders' ? 'font-bold border-b-2 border-black' : ''}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Delivery address */}
      <div className="mx-4 my-3 bg-[#e5f4fe] rounded-xl px-3 py-2 flex items-start gap-2">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1e96fc"/></svg>
        <div>
          <div className="text-xs text-[#1a1a2e]">National University of Singapore, 21 Lower Kent Ridge Rd, University Hall, Singapore 119077</div>
          <div className="text-xs font-bold mt-1">Hongshan    (+65) 1234 5678</div>
        </div>
      </div>

      {/* Order items */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
        {orderItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="flex gap-3 p-3">
              <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#1a1a2e] line-clamp-3">{item.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-lg">{item.price}</span>
                  <div className="flex items-center gap-1 bg-[#a2d6f9] rounded px-2 py-0.5 text-xs">
                    <span>-</span><span>x {item.qty}</span><span>+</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className={`w-2 h-2 rounded-full ${item.statusColor}`}/>
                  <span className="text-xs text-gray-600">{item.status}</span>
                </div>
                <div className="bg-[#e5f4fe] rounded px-2 py-0.5 text-xs text-gray-600 mt-1 inline-block">{item.detail}</div>
              </div>
            </div>
            <div className="bg-[#e5f4fe] mx-3 mb-3 rounded-xl px-3 py-2 text-xs">
              <div><span className="font-bold">Delivery</span>: {item.delivery}</div>
              <div><span className="font-bold">Remark</span>: {item.remark}</div>
            </div>
          </div>
        ))}

        {/* Payment section */}
        <div className="bg-[#e5f4fe] rounded-xl p-4">
          <div className="text-right font-bold text-lg mb-2">Total: $63.31</div>
          <div className="border-t border-gray-300 mb-3"/>
          <div className="font-bold text-base mb-3">Select payment type:</div>
          <div className="flex gap-3 mb-4">
            {paymentMethods.map(pm => (
              <div key={pm.id} className="w-12 h-12 rounded-lg overflow-hidden bg-white border border-gray-200">
                <img src={pm.img} alt={pm.label} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/after-payment')}
            className="w-full bg-[#1e96fc] text-white py-3 rounded-xl font-bold text-2xl"
          >
            PAY
          </button>
        </div>
      </div>

      <BottomNavbar active="trade" />
    </div>
  );
}
