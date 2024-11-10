import { create } from 'zustand';

interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  price: string;
  image: string;
  category: 'dogs' | 'cats' | 'birds' | 'fish';
}

interface SearchState {
  searchTerm: string;
  category: string;
  sortBy: string;
  results: Pet[];
  setSearchTerm: (term: string) => void;
  setCategory: (category: string) => void;
  setSortBy: (sort: string) => void;
  setResults: (results: Pet[]) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: '',
  category: 'All',
  sortBy: 'Relevance',
  results: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  setCategory: (category) => set({ category }),
  setSortBy: (sortBy) => set({ sortBy }),
  setResults: (results) => set({ results }),
}));