import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../componets/header/Header'
import { useAuth } from '../hooks/auth'
import styles from '../styles/Home.module.css' 

const Home: NextPage = () => {
  const {data,error,signUp,login} = useAuth()
  if(error) return <div>Failed to loading</div>
  if(!data) return <div>Loading...</div>
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>{data.map((item:any)=>item.email)}</h1>
        {/* <button onClick={()=>register()}>Signup</button> <br /> */}
        {/* <button onClick={()=>login()}>Login</button> */}
      </main>
    </div>
  )
}

export default Home
