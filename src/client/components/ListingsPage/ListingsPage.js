import React from 'react';
import ListingsNav from './ListingsNav';
import ListingsHeader from './ListingsHeader';
import Listings from './Listings';
import ListingsMap from './ListingsMap';

function ListingsPage() {
  return (
    <>
      <ListingsNav />
      <ListingsHeader />
      <Listings />
      <ListingsMap />
    </>
  );
}

export default ListingsPage;
