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
          <div className="w-full max-w-xl shadow bg-white rounded-lg px-4 pt-2">
            <ul role="list" class="p-6 divide-y divide-slate-200">
              {getComment.map((comment) => (
                <li class="flex py-4 first:pt-0 last:pb-0" key={comment._id}>
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://source.unsplash.com/random/481x361"
                  alt=""
                />
                <div class="ml-3 overflow-hidden">
                  <p class="text-sm font-medium text-slate-900">{comment.createdBy.username}</p>
                  <p class="text-sm text-slate-500">
                  {comment.content}
                  </p>
                </div>
              </li>
            ))}    
            </ul>
                 
          </div>
        );
      };

    return (
        <>
          {renderListComments()}
        </>
    )

}