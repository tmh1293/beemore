import React from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { MainLayout } from '../../components/Layout'
import request from '../../api/request'
export default function PostDetail() {
    const params = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [status, setStatus] = React.useState("idle");
    const [postData, setPostData] = React.useState();
    const { postId } = params;

    const fetchData = async () => {
        try {
          setStatus("loading");
          const res = await request({
            method: "GET",
            url: `/posts/${postId}/hashtag`,
          });
          if (res && res.success) {
            const data = res.data;
            setPostData(data);
            console.log(data);
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

    const renderPosts = () => {
        if (status === "error") return <div>Error</div>;

        if (status === "idle" || status === "loading") return <div>Loading...</div>;
        const {postId, tagId} = postData;
        const postTime = new Date(postId.createdAt);
        return (
          <div>
                <div>
                    <img src={postId.postImg}></img>
                </div>
                <div className="pt-4 pl-4">
                    <p className="font-bold">{postId.createdBy.username}</p>
                    <p className="text-xs">Posted On {postTime.toLocaleDateString('vi-VN',{day:'numeric',month:'short',year:'numeric'})}</p>
                </div>
                
                <div className="pt-4 pl-4"><h1 className="text-5xl font-bold">{postId.postTitle}</h1></div>
                <div className="pt-4 pl-4">
                    {tagId.map((item) => (
                    <span key={item._id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{item.tagName}
                    </span>
                    ))}
                </div>
                
                <div className="pt-4 pl-4">{postId.content}</div>
                <div>Tạo Comment Component đặt vào đây</div>
          </div>
        );
      };

    return (
        <MainLayout>
            {renderPosts()}
        </MainLayout>
    )
}