import React from 'react'
import { AuthLayout } from '../../components/Layout'
import { Link } from 'react-router-dom'

import request from '../../api/request'
import useAuth from '../../hooks/useAuth';

export default function Register() {
    const [formState, setFormState] = React.useState({
        username:'',
        password:''
    });
    const { setUser } = useAuth();
    const handleChangeForm = (e) => {
        const {value, name} = e.target;

        setFormState(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const {username, password} = formState;
        try{
            const res = await request({
                url:"/user/login",
                method: "POST",
                data:{ username, password},
            })
            if (res.success) {
                const { token, username, _id } = res.data;
                localStorage.setItem("token", token);
                setUser({
                  _id,
                  username
                })
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <AuthLayout>
      <div className="px-4 py-20 mx-auto max-w-7xl ">
          <a
            href="/"
            title="Beemore Home Page"
            className="flex items-center justify-start sm:justify-center"
          >
            <a href="/" title="Go to Beemore Home Page">
              <span className=" text-xl font-bold uppercase text-center text-blue-600 md:text-5xl">
                Beemore
              </span>

              <span className="sr-only">Beemore Home Page</span>
            </a>
            <span className="sr-only">Beemore</span>
          </a>
          <div className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5">
            <h1 className="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">
              Log in to your account
            </h1>
            <form className="pb-1 space-y-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input  placeholder="Tên đăng nhập" 
                        type="text" 
                        value={formState.username} 
                        onChange={handleChangeForm} 
                        name="username" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input  placeholder="Tên đăng nhập" 
                        type="text" 
                        value={formState.username} 
                        onChange={handleChangeForm} 
                        name="username" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input  placeholder="Password" 
                        type="password" 
                        value={formState.password}  
                        onChange={handleChangeForm} 
                        name="password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                    <input  placeholder="Password" 
                        type="password" 
                        value={formState.password}  
                        onChange={handleChangeForm} 
                        name="password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              

                <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Đăng ký</button>
                </div>
            </form>
          </div>
        </div>
    </AuthLayout>
    )
}