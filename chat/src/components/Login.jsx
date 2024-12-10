import { useState } from 'react'
import { useNavigate } from 'react-router'
import { axiosInstance } from '../axios.js'
import './Login.css'

const Login = () => {
	const [formData, setFormData] = useState({ username: '', password: '' })
	let navigate = useNavigate()

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await axiosInstance.post('/login', formData)
			if (res.status === 200) {
				navigate('/chat')
			}
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className='login-container'>
			<form className='login-form' onSubmit={handleSubmit}>
				<h2>Login</h2>
				<div className='form-group'>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						id='username'
						name='username'
						placeholder='Enter your username'
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='Enter your password'
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>
				<button type='submit' className='login-btn'>
					Login
				</button>
			</form>
		</div>
	)
}
export default Login
