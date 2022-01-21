import React from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { MainLayout } from '../../components/Layout'
import { Comment, ListComment } from '../../components/Comment'
import request from '../../api/request'
import ScrollIndicator from "../../components/ScrollIndicator";
export default function PostDetail() {
    const params = useParams();
    const location = useLocation();
    //const [searchParams, setSearchParams] = useSearchParams();
    const [status, setStatus] = React.useState("idle");
    const [postData, setPostData] = React.useState();
    const [comments, setComments] = React.useState([]);
    const { slug } = params;
    const getPostId = location.state.postId;

    const fetchData = async () => {
        try {
          setStatus("loading");
          const res = await request({
            method: "GET",
            url: `/posts/${getPostId}/hashtag`,
          });
          if (res && res.success) {
            const data = res.data;
            setPostData(data);
            setStatus("done");
            return;
          }
          setStatus("error");
        } catch (err) {
          setStatus("error");
        }
    };

    React.useEffect(()=>{
        fetchData();
    },[])

    const setCommentsList = (data) => {
      setComments(data);
    }

    const renderPosts = () => {
        if (status === "error") return <div>Error</div>;

        if (status === "idle" || status === "loading") return <div>Loading...</div>;
        const {postId, tagId} = postData;
        const postTime = new Date(postId.createdAt);
        return (
          <div className="flex flex-row p-10 bg-gray-50">
            <div className="basis-2/3 p-10">
                <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
                    <img className="object-cover h-60 w-full" src={postId.postImg}></img>

                    <div className="flex items-center justify-start mt-4 mb-4">
                      {tagId.map((item) => (
                      <a href={`/tags/${item.tagName}`} key={item._id} className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">
                          #{item.tagName}
                      </a>
                      ))}
                    </div>

                    <div className="mt-2">
                        <a href="#" className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-black-500  hover:underline">{postId.postTitle}</a>

                        <div className="flex justify-start items-center mt-2">
                          <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">3000</p>
                          <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
                        </div>

                        <div className="font-light text-gray-600">
                          <a href="#" className="flex items-center mt-6 mb-6">
                        <img src="https://avatars.githubusercontent.com/u/71964085?v=4"
                          alt="avatar"
                          className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">By {postId.createdBy.username}</h1>
                        {/* <p className="text-xs">Posted On {postTime.toLocaleDateString('vi-VN',{day:'numeric',month:'short',year:'numeric'})}</p> */}
                      </a>
                      </div>
                    </div>
                    
                    <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
                      <div>
                        <p className="mt-2 p-8 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">{postId.content}</p>
                      </div>
                    </div>
              </div>
            </div>
            <div className="basis-1/3 max-w-4xl py-16 px-8 mx-auto sm:px-12 xl:px-5">
              <Comment postId={getPostId} setComment={setCommentsList}/>
              <ListComment postId={getPostId} setComment={setCommentsList} getComment={comments} />
            </div>
          </div>
          
        );
      };

    return (
        <MainLayout>
          <ScrollIndicator>
            {renderPosts()}
          </ScrollIndicator>
        </MainLayout>
    )
}