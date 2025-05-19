import React, { useState } from "react";
import { MoreHorizontal, Heart, MessageCircle, Share2, Reply } from "lucide-react";
import asset16 from "@/assets/images/asset 16.webp";
import asset17 from "@/assets/images/asset 17.webp";
import asset18 from "@/assets/images/asset 18.webp";
import assetProfile from "@/assets/images/23.webp";
import assetCover from "@/assets/images/62.webp";
import asset from "@/assets/images/59.webp";
// Sample post dat
const postData = {
  user: {
    name: "Zingko Kudobum",
    profilePic: asset,
    timeAgo: "35 mins ago",
    location: "Consett, UK",
  },
  postText: "Some paintings I love",
  images: [
    asset16,
    asset17,
    asset18,
  ],
  likes: 345,
  commentsCount: 45,
  shares: 56,
};

// Sample comments data
const initialComments = [
  {
    id: 1,
    name: "Mamur Fechetti",
    avatar: assetCover,
    time: "35 mins ago",
    text: "How long did it take to create this? It appears that you quickly produced the second one.",
    replies: [
      {
        id: 101,
        name: "Zingko Kudobum",
        avatar: assetProfile,
        time: "5 mins ago",
        text: "I am so clever that sometimes I don't understand a single word of what I am saying.",
      },
    ],
  },
];

const PostFeed = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        name: "You",
        avatar: postData.user.profilePic,
        time: "Just now",
        text: newComment,
        replies: [],
      },
    ]);
    setNewComment("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-4 rounded-lg shadow-lg">
      {/* Header - User Info */}
      <div className="border-b border-gray-700 pb-3 mb-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={postData.user.profilePic} alt="User Avatar" className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="font-semibold">{postData.user.name}</h3>
            <p className="text-gray-400 text-sm">
              {postData.user.timeAgo} · {postData.user.location}
            </p>
          </div>
        </div>
        {/* Dropdown Menu */}
        <button className="text-gray-400 hover:text-white">
          <MoreHorizontal />
        </button>
      </div>

      {/* Post Content */}
      <p className="mb-3 text-gray-300">{postData.postText}</p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {postData.images.map((img, index) => (
          <img key={index} src={img} className="w-full h-40 object-cover rounded-lg" alt={`Post Image ${index + 1}`} />
        ))}
      </div>

      {/* Post Actions */}
      <div className="flex justify-between text-gray-400 text-sm border-t border-gray-700 pt-3">
        {[
          [`${postData.likes} Likes`, Heart],
          [`${postData.commentsCount} Comments`, MessageCircle],
          [`${postData.shares} Shares`, Share2],
        ].map(([text, Icon], index) => (
          <button key={index} className="flex items-center space-x-1 hover:text-white">
            <Icon size={16} />
            <span>{text}</span>
          </button>
        ))}
      </div>

      {/* Comments Section */}
      <div className=" rounded-lg p-4 shadow-lg mt-5">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4">
            <div className="flex items-start space-x-3">
              <img src={comment.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
              <div className=" p-3 rounded-lg w-full">
                <div className="flex justify-between">
                  <p className="text-sm font-semibold">{comment.name}</p>
                  <p className="text-gray-400 text-xs">{comment.time}</p>
                </div>
                <p className="text-gray-400 text-sm">{comment.text}</p>
                <button className="flex items-center space-x-1 text-gray-400 hover:text-white mt-1 text-sm">
                  <Reply size={14} />
                  <span className="font-semibold">Reply</span>
                </button>
              </div>
            </div>

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="ml-10 mt-3 space-y-3">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex items-start space-x-3">
                    <img src={reply.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
                    <div className=" p-3 rounded-lg w-full">
                      <div className="flex justify-between">
                        <p className="text-sm font-semibold">{reply.name}</p>
                        <p className="text-gray-400 text-xs">{reply.time}</p>
                      </div>
                      <p className="text-gray-400 text-sm">{reply.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Add Comment Input */}
        <div className="mt-4 flex items-center space-x-3">
          <img src={postData.user.profilePic} alt="User Avatar" className="w-10 h-10 rounded-full" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="bg-gray-700 text-white rounded-full px-4 py-2 w-full focus:outline-none"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddComment()}
          />
          <button className="bg-blue-600 px-4 py-1.5 text-white rounded-md hover:bg-blue-700" onClick={handleAddComment}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
