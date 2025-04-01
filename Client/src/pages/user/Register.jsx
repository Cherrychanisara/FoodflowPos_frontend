import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios, { all } from 'axios'


const initInput = {
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	confirmPassword: '',
	shopname: ''
}

function Register() {


	const [input, setInput] = useState(initInput)
	const [file, setFile] = useState(null)

	const hdlChange = e => {
		setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
	}

	const hdlClearInput = () => {

		setInput(initInput)
	}

	const hdlRegister = async e => {
		e.preventDefault()
		try {

			const { firstname, lastname, email, password, confirmPassword, shopname } = input


			// ** validation
			if (!firstname.trim() || !lastname.trim() || !email.trim() || !password.trim() || !shopname.trim()) {
				return toast.error('Please fill all inputs')
			}
			if (password !== confirmPassword) {
				return toast.error('Password and Confirm password unmatched!!')
			}

			const body = new FormData()
			if (file) {
				body.append("image", file)
			}
			if (firstname) {
				body.append("firstname", firstname)
			}

			if (lastname) {
				body.append("lastname", lastname)
			}

			if (email) {
				body.append("email", email)
			}

			if (password) {
				body.append("password", password)
			}
			if (confirmPassword) {
				body.append("confirmPassword", confirmPassword)
			}
			if (shopname) {
				body.append("shopname", shopname)
			}

			const rs = await axios.post('http://localhost:6778/api/register', body)
			toast.success('Register Success')

			hdlClearInput()
			document.getElementById('register-form').close()
			toast('Register successful')
		} catch (err) {
			console.log(err)
			const errMsg = err.response?.data?.error || err.message
			toast.error(errMsg)
		}
	}

	console.log("file", file);

	return (
		<>
			<div className='w-full h-full  '>

				<div className="mx-auto max-w-screen-lg flex justify-between gap-32 ">
					<div className="flex flex-col gap-4 basis-3/5 mt-[200px]">
						<img
							src="https://github.com/Cherrychanisara/myimages/blob/main/registerimg.png?raw=true"
							
						/>
					</div>
					<div className="divider opacity-60"></div>
					<div>

						<div className="text-3xl text-center opacity-70 mb-[30px] mt-[30px] font-extrabold">Create Account</div>
						<div className='text-center flex justify-center'>

							<input type="file" id='input-file' onChange={(e) => setFile(e.target.files[0])} className='hidden ' />
							{
								file ?
									<div onClick={() => document.getElementById('input-file').click()} >
										<img src={URL.createObjectURL(file)} alt="Profile"
											className="w-[120px] h-[120px] object-cover rounded-full mb-5" />
									</div>

									: <img src="icon.svg" alt='photo' className='w-[300px] h-[300px] mt-[-70px] mb-[-70px]' onClick={() => document.getElementById('input-file').click()} />
							}

						</div>
						<form onSubmit={hdlRegister} className='flex flex-col gap-5 p-4 pt-3'>
							<div className='flex gap-2'>


								<div className="w-60">
									<label className="text-[13px]">Firstname</label>
									<input
										type="text"
										className="input input-bordered w-full h-[50px] rounded-lg pl-4"
										placeholder="First name"
										name="firstname"
										value={input.firstname}
										onChange={hdlChange}
									/>
								</div>


								<div className="w-60">
									<label className="text-[13px]">Lastname</label>
									<input
										type="text"
										className="input input-bordered w-full h-[50px] rounded-lg pl-4"
										placeholder="Last name"
										name="lastname"
										value={input.lastname}
										onChange={hdlChange}
									/>
								</div>
							</div>

							<div>
								<label className="text-[13px]">Email</label>
								<input
									type="email"
									className="input input-bordered w-full h-[50px] rounded-lg pl-4"
									placeholder="E-mail"
									name="email"
									value={input.email}
									onChange={hdlChange}
								/>
							</div>

							<div>
								<label className="text-[13px]">Password</label>
								<input
									type="password"
									className="input input-bordered w-full h-[50px] rounded-lg pl-4"
									placeholder="Password"
									name="password"
									value={input.password}
									onChange={hdlChange}
								/>
							</div>

							<div>
								<label className="text-[13px]">Confirm Password</label>
								<input
									type="password"
									className="input input-bordered w-full h-[50px] rounded-lg pl-4"
									placeholder="Confirm Password"
									name="confirmPassword"
									value={input.confirmPassword}
									onChange={hdlChange}
								/>
							</div>

							<div>
								<label className="text-[13px]">Restaurant Name</label>
								<input
									type="text"
									className="input input-bordered w-full h-[50px] rounded-lg pl-4"
									placeholder="Restaurant Name"
									name="shopname"
									value={input.shopname}
									onChange={hdlChange}
								/>
							</div>
							<div className=' w-full flex justify-center'>
								<button className='text-center text-white border bg-[#D4251A] w-[160px] h-[45px] rounded-full mt-5 mb-3'>Sign up</button>
							</div>
						</form>
					</div>
				</div>

			</div>
		</>
	)
}

export default Register