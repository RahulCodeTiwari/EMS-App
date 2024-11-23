import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
       handleLogin(email,password)

        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>

                <input
                value={email}
                onChange={(e) => {
                   setEmail(e.target.value)
                }}
                required className='text-white  outline-none bg-transparent  border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-white'  type="email" placeholder='Enter your email' />
            
                <input required className='text-white  outline-none border-2 bg-transparent   border-emerald-600 py-3 px-5 rounded-full placeholder:text-white' type="password" placeholder='Enter you password'  />
                <button className='text-white  outline-none   wt-6  bg-emerald-600 py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
            </form>

        </div>
        

    </div>
  )
}

export default Login