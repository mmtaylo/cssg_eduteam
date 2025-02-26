import "./Post.css";
import { useState } from "react";

function Post({ picture, likes, comments }){
    const [isPostHovered, setIsPostHovered] = useState(false);


    console.log(picture);

    return <>
        <div 
            className="post"
            style={{
                backgroundImage: `url("${picture}")`
            }}
            onMouseEnter={() => setIsPostHovered(true)}
            onMouseLeave={() => setIsPostHovered(false)}
        > 
        {isPostHovered && (
            <div> 
                <span className="like-comment">
                    Likes: {likes}
                </span>
                <span className="like-comment">
                    Comments: {comments}
                </span>
            </div>
        )}
        </div>
    </>;
}

export default Post;