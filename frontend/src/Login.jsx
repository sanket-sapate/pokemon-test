import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from './Axios.js'

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const navigate  = useNavigate()
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/auth/login', credentials)
            console.log(data)
            localStorage.setItem('token', data?.data?.token)
            toast.success("Login successful")
            navigate('/')
        }catch (err) {
            toast.error("Invalid credentials")
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input required type="email" name="email" id="email" placeholder="Enter Email Address" onChange={handleChange} value={credentials.login} className="w-full p-3 rounded bg-gray-200 border border-gray-200 focus:outline-none focus:border-gray-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
                        <input required type="password" name="password" id="password" placeholder="Enter Password" onChange={handleChange} value={credentials.password} className="w-full p-3 rounded bg-gray-200 border border-gray-200 focus:outline-none focus:border-gray-500" />
                    </div>
                    <button type="submit" className="w-full py-3 mt-4 bg-gray-800 rounded text-white hover:bg-gray-900">Login</button>
                </form>
            </div>
        </div>
    )
}