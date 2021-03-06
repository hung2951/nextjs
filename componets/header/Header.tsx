import Link from 'next/link'
import React from 'react'
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='nav-bar'>
        <ul className=''>
            <li>
                <Link href={`/`}><a className='text-blue-700'>Home Page</a></Link>
            </li>
            <li>
                <Link href={`/product`}><a>Product Page</a></Link>
            </li>
            <li>
                <Link href={`/admin`}><a>Admin</a></Link>
            </li>
            <li>
                <Link href={`/login`}><a>Login</a></Link>
            </li>
        </ul>
    </div>
  )
}

export default Header