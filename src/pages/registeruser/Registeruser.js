import React from 'react'

export default function Registeruser() {
  return (
    <>
<div className="bg-[#ddb7ab] h-full flex flex-col">
                <div className="flex items-center justify-center w-full h-36 mt-4"> 
                        <img
                        src="Gemarii2.png"  
                        alt="gemarii"
                        height={250} width={550}
                        className='p-2'
                        />
                </div>
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center mb-10 px-2">
               
                    <div className="bg-gray-50 px-6 py-8 rounded shadow-md text-black h-auto w-full">
                        <h1 className="mb-8 text-3xl text-center font-semibold">Sign up</h1>
                        <input 
                            type="text"
                            className="block border border-black w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-black text-white hover:bg-opacity-75 focus:outline-none my-1"
                        >Create Account
                        
                        </button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a className="no-underline pl-1 border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and 
                            <a className="no-underline pl-1 border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                        <div className="text-gray-700 text-center mt-6">
                            Already have an account? 
                            <a className="no-underline pl-1 border-b border-blue text-blue" href="../login/">
                                Log in
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}
