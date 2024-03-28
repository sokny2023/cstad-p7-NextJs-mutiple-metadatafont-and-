import React from 'react'
export type ParamProps = {
  params: {
    id: string | number
  }  
}

async function getDetail(id:number | string) {
  const productDetail = await fetch(`https://dummyjson.com/products/${id}`)
  return productDetail.json()
}

export async function generateMetadata({params}:ParamProps){
  const id = params.id;
  const product = await getDetail(id);
  return{
    title: product.title,
    description: product.description,

    openGraph:{
      images:product.thumnail
    }
  }
}


async function page({params}:ParamProps){
  const id = params.id;
  const productDetail = await getDetail(id);
  return (
    <div>
      <h1 className='font-bold text-xl'>
        Product title:{productDetail.title}
        <img src={productDetail.thumbnail} alt="" />
      </h1>
    </div>
  )
}
//  const  Page: React.FC<{params: ParamProps}> = ({params})=> {

//   const id = params.id;
//   // const productDetail 
//   return (
//     <div>
//       Detail page {id}
//     </div>
//   )
// }

export default page
