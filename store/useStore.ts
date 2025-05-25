import { create } from 'zustand';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  performance: number;
  bio: string;
  address: string;
  phone: string;
  history: number[];
};

interface Store {
  users: User[];
  bookmarks: User[];
  setUsers: (users: User[]) => void;
  addBookmark: (user: User) => void;
  removeBookmark: (id: number) => void;
}

export const useStore = create<Store>((set) => ({
  users: [],
  bookmarks: [],
  setUsers: (users) => set({ users }),
  addBookmark: (user) => set((state) => ({
    bookmarks: state.bookmarks.some(u => u.id === user.id)
      ? state.bookmarks
      : [...state.bookmarks, user]
  })),
  removeBookmark: (id) => set((state) => ({
    bookmarks: state.bookmarks.filter(u => u.id !== id)
  })),
}));
