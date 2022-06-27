import Link from 'next/link'
import React from 'react'
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='nav-bar'>
        <ul className='flex'>
            <li>
                <Link href={`/`}><a className='text-blue-700'>Home Page</a></Link>
            </li>
            <li>
                <Link href={`/product`}><a>Product Page</a></Link>
            </li>
            <li>
                <Link href={`/about`}><a>About</a></Link>
            </li>
        </ul>
    </div>
  )
}

export default Header