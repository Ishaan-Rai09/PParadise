import { create } from 'zustand';

export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  price: number;
  image: string;
  description: string;
  category: 'dogs' | 'cats' | 'birds' | 'fish';
}

interface PetState {
  pets: Pet[];
  supplies: Supply[];
  getPetsByCategory: (category: string) => Pet[];
  getSuppliesByCategory: (category: string) => Supply[];
}

export interface Supply {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

// Sample data
const pets: Pet[] = [
  {
    id: 1,
    name: 'Luna',
    breed: 'Golden Retriever',
    age: '2 months',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Friendly and playful Golden Retriever puppy',
    category: 'dogs',
  },
  {
    id: 2,
    name: 'Max',
    breed: 'German Shepherd',
    age: '3 months',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Intelligent and loyal German Shepherd puppy',
    category: 'dogs',
  },
  {
    id: 3,
    name: 'Oliver',
    breed: 'Persian Cat',
    age: '1 year',
    price: 800,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Beautiful Persian cat with a gentle temperament',
    category: 'cats',
  },
  {
    id: 4,
    name: 'Charlie',
    breed: 'Budgerigar',
    age: '6 months',
    price: 50,
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Colorful and friendly Budgie',
    category: 'birds',
  },
  {
    id: 5,
    name: 'Nemo',
    breed: 'Clownfish',
    age: '1 year',
    price: 30,
    image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant clownfish perfect for your aquarium',
    category: 'fish',
  },
  // Add more pets for each category
];

const supplies: Supply[] = [
  {
    id: 1,
    name: 'Premium Dog Food',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'dogs',
    description: 'High-quality dog food for all breeds',
  },
  {
    id: 2,
    name: 'Cat Tree',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cats',
    description: 'Multi-level cat tree with scratching posts',
  },
  // Add more supplies
];

export const usePetStore = create<PetState>((set, get) => ({
  pets,
  supplies,
  getPetsByCategory: (category) => 
    category.toLowerCase() === 'all' 
      ? get().pets 
      : get().pets.filter(pet => pet.category === category.toLowerCase()),
  getSuppliesByCategory: (category) =>
    category.toLowerCase() === 'all'
      ? get().supplies
      : get().supplies.filter(supply => supply.category === category.toLowerCase()),
}));