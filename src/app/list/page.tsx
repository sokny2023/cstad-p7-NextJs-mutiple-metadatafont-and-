import React from 'react';
import ListPage from './ListPage';
import { Metadata } from 'next';
export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "List",
  description: "This is list page",
  keywords: "myshop, shop, product, product shop, shop product, shop product shop",
};



const page = () => {
  return (
    <div>
      <ListPage/>
    </div>
  );
}

export default page;
