'use client';
import { useState } from 'react';

export default function TabbedProfile({ user }: { user: any }) {
  const [tab, setTab] = useState('overview');
  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setTab('overview')} className={tab === 'overview' ? 'font-bold underline' : ''}>Overview</button>
        <button onClick={() => setTab('projects')} className={tab === 'projects' ? 'font-bold underline' : ''}>Projects</button>
        <button onClick={() => setTab('feedback')} className={tab === 'feedback' ? 'font-bold underline' : ''}>Feedback</button>
      </div>
      <div>
        {tab === 'overview' && (
          <div>
            <p><b>Address:</b> {user.address}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Bio:</b> {user.bio}</p>
            <p><b>Performance History:</b> {user.history.join(', ')}</p>
          </div>
        )}
        {tab === 'projects' && (
          <div>
            <p>Mock Projects List</p>
          </div>
        )}
        {tab === 'feedback' && (
          <div>
            <form className="flex flex-col gap-2">
              <textarea placeholder="Enter feedback..." className="border rounded p-2" />
              <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
