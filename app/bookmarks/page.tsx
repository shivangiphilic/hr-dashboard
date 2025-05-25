'use client';
import { useStore } from '../../store/useStore';

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useStore();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Bookmarked Employees</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bookmarks.length === 0 && <p>No bookmarks yet.</p>}
        {bookmarks.map(user => (
          <div key={user.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <span className="font-bold">{user.firstName} {user.lastName}</span>
            <div className="flex gap-2 mt-2">
              <button onClick={() => removeBookmark(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
              <button className="bg-yellow-500 text-white px-2 py-1 rounded">Promote</button>
              <button className="bg-blue-500 text-white px-2 py-1 rounded">Assign to Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
