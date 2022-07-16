import instance from "./instance";

export const list = (url:string)=>{
    return instance.get(url)
}

export const signup = (user:any) =>{
    return instance.post("/signup",user)
}
export const signin = (user:any)=>{
    return instance.post('/signin',user)
}