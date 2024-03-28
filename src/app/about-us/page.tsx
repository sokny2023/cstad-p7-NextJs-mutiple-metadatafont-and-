
import { Button } from '@nextui-org/react'
import React from 'react'
import  style  from './AboutUs.module.css'
import { Metadata } from 'next'

export const metadata:Metadata ={
  title: "About Us page",
  description: "This is  About us page",
  keywords: ["shop", "ecommerce", "sell","shoes","store","products"]
};

const page = () => {
  console.log("This is about page")
  return (
   
    <>
      <div className='text-center'>
        <h1 className={style.heading}>About Page</h1>
      </div>    
    </>
  )
}

export default page
