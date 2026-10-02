import React from 'react'


const Login = () => {
  return (
    <div className='flex h-[100vh] w-[100vw] justify-center items-center'>
        <div className='bg-[#222]/50 p-5 py-10 border rounded-3xl border-zinc-500'>
            <form action="" className='flex flex-col justify-center items-center gap-3'>
              <input type="email" className='border border-zinc-500 rounded-full p-4 placeholder:text-white/15 bg-white/2 text-white w-[80vw] md:w-[40vw]' placeholder='enter email' />
              <input type="password" className='border border-zinc-500 rounded-full p-4 placeholder:text-white/15 bg-white/2 text-white w-[80vw] md:w-[40vw]' placeholder='enter password' />
              <button type="submit" className='mt-5 border border-zinc-500 rounded-full p-4 bg-blue-600 hover:bg-blue-500 text-white w-[80vw] md:w-[40vw] cursor-pointer'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login