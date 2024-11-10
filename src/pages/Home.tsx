import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedPets from '../components/FeaturedPets';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Categories />
      <FeaturedPets />
      <Newsletter />
    </PageTransition>
  );
}