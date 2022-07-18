import Link from 'next/link'
import React from 'react'
import LayoutAdmin from '../../../componets/layouts/Admin'
import { useProduct } from '../../../hooks/product'

type Props = {}

const ProductManagement = (props: Props) => {
    const {data,remove,error} = useProduct()
    if(!data) return <div>Loading...</div>
    if(error) return <div>Failed to loading</div>
  return (
    <div>
        <div className='text-center text-3xl mb-8 font-bold'>Quản lý sản phẩm</div>
        <span className='mb-5 block underline text-blue-700 hover:text-blue-500'><Link href={`/admin/product/add`}>Thêm sản phẩm</Link></span>
        <table className='border border-black w-full mx-auto text-center'>
            <thead className='border-b border-black h-10'>
                <tr>
                    <th>#</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='border border-black h-10'>
                {data.map((item:any,index:number)=>(
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={()=>remove(item.id)} className='text-red-700'>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
ProductManagement.Layout = LayoutAdmin
export default ProductManagement