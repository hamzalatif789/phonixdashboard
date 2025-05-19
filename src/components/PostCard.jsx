import React, { useState } from "react";
import { MoreHorizontal, Heart, MessageCircle, Share2 } from "lucide-react";
import assetCover from "@/assets/images/62.webp";
import asset from "@/assets/images/59.webp";
// Sample post data
const postData = {
  user: {
    name: "Zingko Kudobum",
    profilePic: asset, // Replace with actual path
    timeAgo: "35 mins ago",
  },
  postText:
    'A guy enters a bakery while carrying a 25-pound haddock. He asks the baker if he makes fish cakes. The rather perplexed baker responds in the negative. The guy responds "That\'s unfortunate. Today is his birthday"',
  likes: 23,
  commentsCount: 9,
  shares: 3,
};

const PostCard = () => {
  const [newComment, setNewComment] = useState("");

  return (
    <div className="max-w-3xl mx-auto rounded-lg shadow-md p-4">
      {/* Header - User Info */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-3">
          <img
            src={postData.user.profilePic}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold ">{postData.user.name}</h3>
            <p className=" text-sm">{postData.user.timeAgo}</p>
          </div>
        </div>
        {/* More Options */}
        <button className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal />
        </button>
      </div>

      {/* Post Content */}
      <p className=" text-md">{postData.postText}</p>

      {/* Post Actions */}
      <div className="flex justify-between text-gray-500 text-sm border-t border-gray-300 pt-3 mt-3">
        {[
          [`${postData.likes} Likes`, Heart],
          [`${postData.commentsCount} Comments`, MessageCircle],
          [`${postData.shares} Shares`, Share2],
        ].map(([text, Icon], index) => (
          <button key={index} className="flex items-center space-x-1 hover:text-gray-700">
            <Icon size={16} />
            <span>{text}</span>
          </button>
        ))}
      </div>

      {/* Comment Section */}
      <div className=" border-t border-gray-300 p-3 mt-4 rounded-b-lg flex items-center">
        <img
          src={assetCover} // Replace with actual profile image path
          alt="User Avatar"
          className="w-8 h-8 rounded-full mr-3"
        />
        <input
          type="text"
          placeholder="Add comment"
          className="bg-gray-200 text-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PostCard;
