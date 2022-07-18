import Link from 'next/link'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import LayoutEmpty from '../componets/layouts/empty'
import { useAuth } from '../hooks/auth'

type Props = {}
type formInputs={
    email:string,
    password:string
}
const Login = (props: Props) => {
    const {login} = useAuth()
    const {register,handleSubmit,formState:{errors}} = useForm<formInputs>();
    const onSubmit:SubmitHandler<formInputs> = async (data) =>{
        login(data)
        console.log(login(data));
        // localStorage.setItem('user',JSON.stringify(user))
    }
  return (
    <div>
        <h2 className='text-center font-bold text-3xl mt-5'>Login</h2>
        <form className='w-[500px] mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>Email:
            <label htmlFor="">
                <input {...register('email')} className='block w-full h-10 rounded-sm pl-2 border border-[#ccc] mb-5' type="text" placeholder='Email' />
            </label>
            <label htmlFor="">Password:
                <input {...register('password')} className='block w-full h-10 rounded-sm pl-2 border border-[#ccc]' type="password" placeholder='Password' />
            </label>
            <p className='text-sm mt-3'>Do not have an account? <Link href={`/signup`}><a className='underline text-blue-500'>Create account</a></Link></p>
            <button className='bg-blue-600 h-10 mt-7 w-28 rounded-sm text-white hover:bg-blue-500'>Login</button>
        </form>

    </div>
  )
}

Login.Layout = LayoutEmpty
export default Login