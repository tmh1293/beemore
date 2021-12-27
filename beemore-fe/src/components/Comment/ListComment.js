import React from 'react'
import request from '../../api/request'
export default function ListComment({postId,setComment,getComment}) {
    const [status, setStatus] = React.useState("idle");
    //const [comments, setComments] = React.useState([]);
    

    const fetchComment = async () => {
        try {
          setStatus("loading");
          const res = await request({
            method: "GET",
            url: `/posts/${postId}/comments`,
          });
          if (res && res.success) {
            const data = res.data;
    
            setStatus("done");
            setComment(data);
            return;
          }
          setStatus("error");
        } catch (err) {
          setStatus("error");
        }
    };

    React.useEffect(() => {
        fetchComment();
      }, []);

      const renderListComments = () => {
        if (status === "error") return <div>Error</div>;

        if (status === "idle" || status === "loading") return <div>Loading...</div>;

        return (
          <div>
                {getComment.map((comment) => (
                <div className="col-md-3 mt-6 flex justify-center" key={comment._id}>
                    <div>{comment.createdBy.username}</div>
                    <div>{comment.content}</div>
                </div>
            ))}
          </div>
        );
      };

    return (
        <>
         <div>Đây là List Comment</div>
         <div>{renderListComments()}</div>
        </>
       
    )

}