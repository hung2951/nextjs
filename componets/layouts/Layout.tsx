import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
        <Header/>
        <div className='content'>
            {props.children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout