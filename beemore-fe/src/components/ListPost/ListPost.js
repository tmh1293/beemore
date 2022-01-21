import request from "../../api/request";
import PostCard from '../../components/PostCard'
import React from 'react';
const PAGE_SIZE = 4;
export default function ListPost() {
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
        <>
          {posts.map((post) => (
            <div className="p-4 md:w-1/3" key={post._id}>
                
              <PostCard
                postId={post.postId._id}
                title={post.postId.postTitle}
                imageUrl={post.postId.postImg}
                description={post.postId.content}
                createdBy={post.postId.createdBy}
                tag={post.tagId}
                slug={post.postId.slug}
              />
            </div>
          ))}
        </>
      );
    };

    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-700">BLOGS</h2>
            <div className="flex flex-wrap ">
                {/* Card */}
              {renderPosts()}
              {/* Card */}
            </div>
          </div>
        </section>
      </>
    );
  }
  