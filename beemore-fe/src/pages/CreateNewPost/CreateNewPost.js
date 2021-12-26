import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import NavBar from '../../components/NavBar'
import { MainLayout } from '../../components/Layout'
import request from '../../api/request'
export default function CreateNewPost(){

    const [formState, setFormState] = React.useState({
        postTitle:'',
        tag:'',
    });
    const [content, setContent] = React.useState();

    const handleChangeForm = (e) => {
        const {value, name} = e.target;
        setFormState(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {postTitle, tag} = formState;
        
        try{
            const res = await request({
                url:"/posts",
                method: "POST",
                data:{ postTitle, content},
            })
            console.log(res.data);
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <MainLayout>
            <NavBar/>
            <div className="flex justify-center">
            
                <form className="flex justify-center flex-col w-3/6 rounded-lg p-4 shadow-lg" onSubmit={handleSubmit}>
                    <input placeholder="Tiêu đề bài viết" className="p-5 outline-0" name="postTitle" onChange={handleChangeForm} value={formState.postTitle}  ></input>
                    <input placeholder="Tag bài viết" className="p-5 outline-0" name="tag" onChange={handleChangeForm} value={formState.tag}  ></input>
                    <CKEditor
                        editor={ ClassicEditor }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setContent(data);
                        } }
                        data={content} 
                        onBlur={ ( event, editor ) => {
                            //console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            //console.log( 'Focus.', editor );
                        } }
                        onReady={(editor) => {
                            editor.editing.view.change((writer) => {
                            writer.setStyle(
                                "height",
                                "400px",
                                editor.editing.view.document.getRoot()
                            );
                            });
                        }}
                    />
                    
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Đăng bài viết</button>
                </form>
            </div>
        </MainLayout>
        
            
        
    )
}