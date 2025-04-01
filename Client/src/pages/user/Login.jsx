import React, { useState } from 'react'
import { toast } from 'react-toastify'
import useUserStore from '../../store/userStore'


function Login() {
    const login = useUserStore(state => state.login)
    const [input, setInput] = useState({
        email: '',
        password: ''
    })


    const hdlChange = e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const validate = () => {
        const newErrors = {};
        if (!input.email?.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!input.password?.trim()) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    }

    const goto = (e) => {
        window.location.href =  e
    }
    const hdlLogin = async (e) => {
        e.preventDefault(); 
        try {
            const { email, password } = input || {}; 
    
            // validation
            if (!email?.trim() || !password?.trim()) {
                return toast.error('Please fill all inputs');
            }
    
            console.log("Input:", input);
    
            let data = await login(input);
    
           alert('Login successful');
           goto('/')
            console.log("Login Response:", data);
        } catch (err) {
            const errMsg = err.response?.data?.error || err.message;
            console.error("Login Error:", err);
            toast.error(errMsg);
        }
    };
    
    return (
        <>
            <div className="min-h-screen pt-5 pb-28 bg-[#f2f4f7] font-poppins overflow-y-auto">
                <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between   ">
                    <div className="flex flex-col gap-4  basis-3/5 mt-[-160px]">
                        <img src="https://cdn.jsdelivr.net/gh/colorkram/images/posCherry.png"></img>
                    </div>
                    <div className="flex flex-1">
                        <div className="card bg-base-100 w-full h-[350px] mt-8">
                            <form onSubmit={hdlLogin}>
                                <div className="card-body gap-5 p-3">
                                    
                                    <h2 className="font-bold text-[20px] mb-5" >Sign In</h2>
                                    <div className='mb-4'>
                                        <label className='text-[13px]'>Email</label>
                                        <input
                                            type="text"
                                            className='input input-bordered w-full h-[50px] rounded-lg pl-4'
                                            placeholder='Your Email'
                                            name='email'
                                            value={input.identity}
                                            onChange={hdlChange}
                                        />
                                    </div>
                                    <div>
                                        <label className='text-[13px]'>Password</label>
                                        <input
                                            type="password"
                                            className='input input-bordered w-full h-[50px] rounded-lg pl-4'
                                            placeholder='Password'
                                            name='password'
                                            value={input.password}
                                            onChange={hdlChange}
                                        />
                                        <div className='w-full'>
                                            <p className='text-end' >Forgot Password</p>
                                        </div>
                                    </div>
                                    <div className=' w-full flex justify-center'>
                                        <button className='text-center text-white border bg-[#D4251A] hover:bg-[#e2726c] w-[160px] h-[45px] rounded-full mt-5 mb-3'>Login</button>
                                    </div>

                                    <div className="divider my-0 "></div>
                                    <div className='w-full flex justify-center'>
                                        <p className="text-center cursor-pointer opacity-70 mr-3">
                                            Don't have an account?
                                        </p>
                                        <button
                                            className='text-[#D4251A] '
                                            type='button'
                                            onClick={() => goto('/register')}
                                        >
                                            Sign Up
                                        </button>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login