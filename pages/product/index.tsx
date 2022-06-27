import Head from 'next/head'
import React from 'react'
import Header from '../../componets/header/Header'

type Props = {}

const ProductPage = (props: Props) => {
  return (
    
    <div>
      <Head>
        <title>Product</title>
      </Head>
      <main>
        <Header/>
        <h1 className='text-blue-900 text-2xl'>Product Page</h1>
      </main>
    </div>
  )
}

export default ProductPage