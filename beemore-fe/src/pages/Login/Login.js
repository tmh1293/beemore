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
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input  placeholder="Tên đăng nhập" 
                        type="text" 
                        value={formState.username} 
                        onChange={handleChangeForm} 
                        name="username" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input  placeholder="Password" 
                        type="password" 
                        value={formState.password}  
                        onChange={handleChangeForm} 
                        name="password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Đăng nhập</button>
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">Đăng ký</Link>
                </div>
                
                
            </form>
        </AuthLayout>
    )
}