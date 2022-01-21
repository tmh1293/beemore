import React from 'react';
import { AuthLayout } from "../../components/Layout";
import request from '../../api/request'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

export default function Login(){

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


    return(
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

              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input  placeholder="Password" 
                        type="password" 
                        value={formState.password}  
                        onChange={handleChangeForm} 
                        name="password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
                    Remember me
                  </span>
                </label>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Đăng nhập</button>
                </div>
            </form>
            <div class="relative my-4">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 text-neutral-600 bg-white">
                  {" "}
                  Or continue with{" "}
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-blue-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                  "
              >
                <div class="flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                  <span class="ml-4"> Log in with Google</span>
                </div>
              </button>
            </div>
          </div>
          <p className="mb-4 space-y-2 text-sm text-left text-gray-600 sm:text-center sm:space-y-0">
            <a href="#" className="w-full btn btn-sm btn-link sm:w-auto">
              Forgot password
            </a>
            <Link
              to="/register"
              className="w-full btn btn-sm btn-link sm:w-auto"
            >
              Create an account
            </Link>
          </p>
        </div>
        </AuthLayout>
    )
}