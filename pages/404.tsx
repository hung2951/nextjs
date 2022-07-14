import React from 'react'
import LayoutEmpty from '../componets/layouts/empty'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className='text-center text-3xl mt-48'>
      <p className='text-7xl'>404</p>
      <p>NotFound</p>
    </div>
  )
}
NotFound.Layout = LayoutEmpty
export default NotFound