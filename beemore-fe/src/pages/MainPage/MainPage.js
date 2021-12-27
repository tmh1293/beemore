import React from 'react';
import NavBar from '../../components/NavBar'
import request from "../../api/request";
import PostCard from '../../components/PostCard'
import {MainLayout} from '../../components/Layout'

const PAGE_SIZE = 4;
export default function MainPage(){
    const [status, setStatus] = React.useState("idle");
    const [posts, setPosts] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);

    const fetchPosts = async (page) => {
        const skip = (page - 1) * PAGE_SIZE;
        const limit = PAGE_SIZE;
        try {
          setStatus("loading");
          const res = await request({
            method: "GET",
            url: "/posts",
            params: {
                skip,
                limit,
              },
          });
          if (res && res.success) {
            const { total, data } = res.data;
            //console.log(res.data)
    
            setStatus("done");
            setTotal(total)
            setPosts(data);
            return;
          }
          setStatus("error");
        } catch (err) {
          setStatus("error");
        }
    };

      React.useEffect(() => {
        fetchPosts(currentPage);
      }, [currentPage]);

    const renderPosts = () => {
        if (status === "error") return <div>Error</div>;
    
        if (status === "idle" || status === "loading") return <div>Loading...</div>;
    
        return (
          <div className="row">
            {posts.map((post) => (
              <div className="col-md-3 mt-6 flex justify-center" key={post._id}>
                  
                <PostCard
                  postId={post.postId._id}
                  title={post.postId.postTitle}
                  imageUrl={post.postId.postImg}
                  //description={post.postId.content}
                  createdBy={post.postId.createdBy}
                  tag={post.tagId}
                  slug={post.postId.slug}
                />
              </div>
            ))}
          </div>
        );
      };


    return(
        <MainLayout>
            <NavBar/> 
            <div>
                {renderPosts()}
            </div>
        </MainLayout>
        
    )
}