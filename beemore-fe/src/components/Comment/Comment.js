import React from 'react'

export default function Comment(){

    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input placeholder="Để lại bình luận tại đây..." className="p-4"></input>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Đăng bình luận</button>
        </form>
    )
}