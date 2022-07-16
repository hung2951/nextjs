import useSWR, { useSWRConfig } from "swr"
import { list, signin, signup } from "../pages/api/auth"

export const useAuth = ()=>{
    //list user
    const fetcher = async(url:string)=>{
        const {data} = await list(url)
        return data
    }
    const {data,error} = useSWR('/users',fetcher)
    const {mutate} = useSWRConfig()
    //signup
    const signUp = (user:any)=>{
        mutate("/users",async()=>{
            const {data:users} = await signup(user)
            return [...data,users]
        })
    }
    // login
    const login = (user:any)=>{
        mutate("/users",()=>signin(user))
    }
    return {data,error,signUp,login}
}