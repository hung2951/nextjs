import useSWR, { useSWRConfig } from "swr"
import { signin, signup } from "../pages/api/auth"

export const useAuth = ()=>{
    //list user
    const {data,error,mutate} = useSWR('/users')
    //signup
    const signUp = async (item:any)=>{
        const user = await signup(item)
        mutate([...data,user])
    }
    // login
    const login = (item:any)=>{
        const user = signin(item)
        mutate(user)
    }
    return {data,error,signUp,login}
}