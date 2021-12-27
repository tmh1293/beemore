import React from 'react'
import request from '../../api/request'
export default function Comment({postId,setComment}){
    const [content, setContent] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const res = await request({
                url:"/comments",
                method: "POST",
                data: { 
                    content,
                    postId:postId
                }
            })
            setContent("");
            console.log(res.data);
            const newComment = res.data;
            setComment((prevState) =>{
                return [...prevState,newComment]
            })
        }
        catch(err){
            console.log(err)
        }
    }

    const handleChangeInput = (e) => {
        const content = e.target.value;
        setContent(content)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input placeholder="Để lại bình luận tại đây..." className="p-4" name="comment" onChange={handleChangeInput} value={content}></input>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Đăng bình luận</button>
        </form>
    )
}