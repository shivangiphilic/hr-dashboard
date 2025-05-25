'use client';
import { useStore } from '../store/useStore';

export default function UserCard({ user }: { user: any }) {
  const { addBookmark } = useStore();

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="font-bold">{user.firstName} {user.lastName}</h2>
      <p>{user.email}</p>
      <p>Department: {user.department}</p>
      <div>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < user.performance ? 'text-yellow-400' : 'text-gray-300'}>★</span>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <a href={`/employee/${user.id}`} className="btn bg-blue-500 text-white px-2 py-1 rounded">View</a>
        <button onClick={() => addBookmark(user)} className="btn bg-green-500 text-white px-2 py-1 rounded">Bookmark</button>
        <button className="btn bg-yellow-500 text-white px-2 py-1 rounded">Promote</button>
      </div>
    </div>
  );
}
