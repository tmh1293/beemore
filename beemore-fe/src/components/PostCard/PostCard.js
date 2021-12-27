import React from 'react'
import { Link } from 'react-router-dom';
export default function PostCard({
  imageUrl,
  title,
  createdBy,
  postId,
  tag,
  slug,
}) {

  return (
    <div className="max-w-2xl rounded overflow-hidden shadow-lg">
      <Link
          to={`/posts/${slug}`}
          state={{ postId: postId }}
      >
        <img className="w-full" src={imageUrl} alt={title} />
      </Link>
      <div>
        <div className="flex flex-col">
            <span><Link to={`/profile/${createdBy.username}`} className="p-2 font-bold">{createdBy.username}</Link></span>
            <span><Link to={`/posts/${slug}`} className="font-bold text-xl mb-2 p-2">{title}</Link></span>
        </div>
        <div className="p-2">
          {tag.map((item) => (
                      <Link to={`/tags/${item.tagName}`} key={item._id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #{item.tagName}
                      </Link>
                      ))}
        </div>
      </div>
    </div>
  )
}