import Link from 'next/link'
import React from 'react'
import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from '../loading';
import { Metadata } from 'next';

async function fetchProduct() {
  const product = await fetch("https://dummyjson.com/products", {
    cache: "no-store"
  });
  const res = await product.json();
  return res.products;
}

export const metadata:Metadata ={
  title: "Product",
  description: "This is  About us page",
  keywords: ["shop", "ecommerce", "sell","shoes","store","products"]
};


export default async function page () {
  const product = await fetchProduct();
 
  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5" >
        <Suspense fallback={<LoadingComponent/>} >
        {product?.map((pro: ProductType) => {
          
          return(
            <Link href={`/product/${pro.id}`} key={pro.id}>
            <CardComponent
            thumbnail={pro.thumbnail}
            title={pro.title}
          
          />
          </Link>
          
        )})}
        </Suspense>
      </div>
    </>
  );
}


