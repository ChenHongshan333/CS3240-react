import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

export default function PlanCreationPage() {
  const navigate = useNavigate();
  return (
    <div className="page-container bg-[#f7f7f7] flex flex-col">
      <TopBar showBack />
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8">
        <h1 className="text-2xl font-bold text-[#1a1a2e] mb-4">Cosplay Plan</h1>
        <button
          className="w-full bg-[#1e96fc] text-white py-3 rounded-xl font-bold text-lg shadow-md"
          onClick={() => navigate('/existing-plan')}
        >
          Create a new plan
        </button>
        <button
          className="w-full bg-[#1e96fc] text-white py-3 rounded-xl font-bold text-lg shadow-md"
          onClick={() => navigate('/existing-plan')}
        >
          Add to an existing plan
        </button>
        <button
          className="bg-gray-300 text-white py-3 px-8 rounded-xl font-bold text-lg shadow-md"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
      <BottomNavbar active="workshop" />
    </div>
  );
}
