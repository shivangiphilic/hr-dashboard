'use client';
import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { fetchUsers } from '../lib/fetchUsers';
import UserCard from '../components/UserCard';
import { useSearch } from '../hooks/useSearch';

export default function HomePage() {
  const { users, setUsers } = useStore();
  const { query, setQuery, filter, setFilter, filtered } = useSearch(users);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, [setUsers]);

  const departments = ['HR', 'Engineering', 'Sales', 'Marketing'];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name, email, department..."
          className="border p-2 rounded flex-1"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={filter.department}
          onChange={e => setFilter(f => ({ ...f, department: e.target.value }))}
        >
          <option value="">All Departments</option>
          {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
        </select>
        <select
          className="border p-2 rounded"
          value={filter.rating}
          onChange={e => setFilter(f => ({ ...f, rating: Number(e.target.value) }))}
        >
          <option value={0}>All Ratings</option>
          {[1,2,3,4,5].map(r => <option key={r} value={r}>{r} Stars</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(user => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}
