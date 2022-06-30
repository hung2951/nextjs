import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../../componets/header/Header'

type ProductProps = {
  products:any[]
}

const ProductPage = (props: ProductProps) => {
  if (!props.products) {
    return null
  }
  return (
    <div>
      <Head>
        <title>Product</title>
      </Head>
      <main>
        <Header/>
        <h1 className='text-blue-900 text-2xl'>
          {props.products.map(item=>
            <div key={item.id}><Link href={`product/${item.id}`}>{item.name}</Link></div>
            )}
        </h1>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context:GetStaticPropsContext)=>{
  const data = await (await fetch(`http://localhost:8000/products`)).json()
  if (!data) {
    return{
      notFound:true
    }
  }
  return {
    props:{
      products:data
    }
  }
}

export default ProductPage