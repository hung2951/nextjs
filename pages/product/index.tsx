import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

type ProductProps = {
}
const url = `http://localhost:8000/products`
const fetcher = async (url:any)=> await (await fetch(url)).json()
const ProductPage = (props: ProductProps) => {
  const {data,error} = useSWR(url,fetcher)
  if (error) {
    return <div>Failed to loading...</div>
  }
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <Head>
        <title>Product</title>
      </Head>
      <main>
        <h1 className='text-blue-900 text-2xl'>
          {data.map((item:any)=>
            <div key={item.id}><Link href={`product/${item.id}`}>{item.name}</Link></div>
            )}
        </h1>
      </main>
    </div>
  )
}

export default ProductPage