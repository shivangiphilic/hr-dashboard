'use client';
import { useStore } from '../../../store/useStore';
import TabbedProfile from '../../../components/TabbedProfile';
import { useParams } from 'next/navigation';

export default function EmployeePage() {
  const params = useParams();
  const id = Number(params.id);
  const user = useStore(state => state.users.find(u => u.id === id));
  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{user.firstName} {user.lastName}</h1>
      <p className="mb-4">{user.bio}</p>
      <TabbedProfile user={user} />
    </div>
  );
}
