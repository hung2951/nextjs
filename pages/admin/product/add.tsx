import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import LayoutAdmin from '../../../componets/layouts/Admin'
import { useProduct } from '../../../hooks/product'

type Props = {}
type Inputs = {
    name:string,
    price:number
}

const ProductAdd = (props: Props) => {
    const {create} = useProduct()
    const router = useRouter()
    const {register, handleSubmit, formState:{errors} } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data =>{
        router.push('/admin/product')
        create(data)
    }
  return (
    <div>
        <div className='text-center text-3xl mb-8 font-bold'>Thêm sản phẩm</div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
                <label className="block">Tên sản phẩm:</label>
                <input type="text" {...register('name')} className="block border border-[#ccc] h-10 w-full rounded-sm mb-5 pl-3" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="block">Giá:</label>
                <input type="number" {...register('price')} className="block border border-[#ccc] h-10 w-full rounded-sm mb-5 pl-3" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="bg-blue-600 w-[150px] h-10 rounded-sm text-white hover:bg-blue-700">Thêm</button>
        </form>
    </div>
  )
}
ProductAdd.Layout = LayoutAdmin
export default ProductAdd