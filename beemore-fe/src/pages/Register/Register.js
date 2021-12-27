import React from 'react'
import { AuthLayout } from '../../components/Layout'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <AuthLayout>
      <div className="border p-3" style={{ width: 500 }}>
        <h1>Beemore Register</h1>
        <form>
        <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input  placeholder="Tên đăng nhập" 
                        type="text" 
                        // value={} 
                        // onChange={} 
                        name="username" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input placeholder="Password" 
                        type="password" 
                        // value={}  
                        // onChange={} 
                        name="password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                    <input placeholder="Password" 
                        type="password" 
                        // value={}  
                        // onChange={} 
                        name="password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Đăng ký
                </button>
            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">Login</Link>
            </div>
          
        </form>
      </div>
    </AuthLayout>
    )
}