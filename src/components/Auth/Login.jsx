import React, { useState } from 'react'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(`ayy yo gng form has been submited your email is ${email} and your password is ${password}`);

    setEmail("")
    setPassword("")
  }


  return (
    <div className='flex h-[100vh] w-[100vw] justify-center items-center'>
        <div className='bg-[#222]/50 p-5 py-10 border rounded-3xl border-zinc-500'>
            <form onSubmit={(e) => submitHandler(e)} className='flex flex-col justify-center items-center gap-3'>
              <input value={email} onChange={(e) => {setEmail(e.target.value)}} required type="email" className='border border-zinc-500 rounded-full p-4 placeholder:text-white/15 bg-white/2 text-white w-[80vw] md:w-[40vw]' placeholder='enter email' />
              <input value={password} onChange={(e) => {setPassword(e.target.value)}} required type="password" className='border border-zinc-500 rounded-full p-4 placeholder:text-white/15 bg-white/2 text-white w-[80vw] md:w-[40vw]' placeholder='enter password' />
              <button type="submit" className='mt-5 font-bold border border-zinc-500 rounded-full p-4 bg-blue-600 hover:bg-blue-500 text-white w-[80vw] md:w-[40vw] cursor-pointer'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login