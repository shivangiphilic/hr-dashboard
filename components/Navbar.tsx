'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 p-4 flex gap-4 mb-6">
      <Link href="/" className="font-bold">Dashboard</Link>
      <Link href="/bookmarks">Bookmarks</Link>
      <Link href="/analytics">Analytics</Link>
    </nav>
  );
}
