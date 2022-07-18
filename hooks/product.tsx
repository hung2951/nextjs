import useSWR from "swr"
import { add, removeItem } from "../pages/api/product"
export const useProduct = ()=>{
    const {data,error,mutate} = useSWR('/products')
    const create = async (item:any)=>{
        const product = await add(item)
        mutate([...data,product])
    }
    const remove = async (id:any)=>{
        const confirmItem = confirm('Bạn có muốn xóa không?')
        if (confirmItem) {
            await removeItem(id)
            const newProduct = data.filter((item:any)=>item.id !=id)
            mutate(newProduct)
        }
    }
    return {data,error,remove,create}
}

