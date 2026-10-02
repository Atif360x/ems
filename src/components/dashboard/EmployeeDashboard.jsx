import React from 'react'

const EmployeeDashboard = () => (
    <main>

        <section>
            <div className='text-white font-bold pt-10 pl-6'>
                <p className='m-0 text-white/60'>Hello</p>
                <h1 className='text-4xl m-0'>ATIF 👋</h1>
            </div>
            
        </section>
        <section className="w-full min-h-[50vh] flex items-center justify-center p-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                <div className="aspect-square rounded-lg border-3 border-green-800 bg-green-800/20"></div>
                <div className="aspect-square rounded-lg border-3 border-blue-800 bg-blue-800/20"></div>
                <div className="aspect-square rounded-lg border-3 border-red-800 bg-red-800/20"></div>
                <div className="aspect-square rounded-lg border-3 border-yellow-800 bg-yellow-800/20"></div>
            </div>
        </section>
            <div className='w-[90vw] border-2 border-zinc-500 flex justify-self-center'></div>
        <section className='w-[100vw] max-h-[50vh] flex flex-col justify-center items-center p-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full justify-center items-center overflow-y-scroll'>
                <div className='border border-green-500 justify-self-center w-[90vw] md:w-[48vw] py-4 rounded-xl'>
                    <h5>test task</h5>
                    <p>test discription</p>
                    <p></p>
                </div>
            </div>
        </section>
    </main>
)

export default EmployeeDashboard