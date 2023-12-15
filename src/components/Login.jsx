import React from 'react'

function Login() {
  return (
      <div className=' bg-no-repeat bg-cover bg-[url("https://static.vecteezy.com/system/resources/thumbnails/008/506/635/small/cute-forest-with-deer-on-mountains-forest-wall-for-children-cute-deer-background-nursery-wallpaper-for-baby-room-room-design-png.png")] h-[550px] w-[700px] rounded-xl flex flex-col justify-evenly items-center absolute left-0 right-0 top-0 bottom-0 m-auto z-10 bg-white'>
      <h1 style={{fontWeight:'bold'}} className='flex justify-center text-3xl '>WELCOME</h1>
        <input className='h-[50px] w-[250px] rounded-2xl text-center border-none outline-none shadow-md' type="text" placeholder='email/username' />
        <input className='h-[50px] w-[250px] rounded-2xl text-center border-none outline-none shadow-md' type="text" placeholder='password' />
        <button className='h-[40px] w-[130px] bg-blue-400 rounded-3xl shadow-md'>LOGIN</button>
        <h2>Don't have account? <button className='text-yellow-300'>Register</button></h2>
        <h2 style={{fontWeight:'bold'}}>OR LOGIN WITH</h2>
        <button className='bg-white h-[40px] w-[150px] rounded-3xl flex items-center justify-start pl-2'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/640px-Google_%22G%22_Logo.svg.png" alt="" style={{height:'25px',width:'25px'}} />  <span className="ml-6">Google</span></button>
      </div>
  )
}

export default Login
