import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="max-w-[1920px] w-full md:px-24 mt-16 mx-auto">
            <h2>Posts: {posts.length}</h2>
            <div className="grid grid-cols-2 gap-4">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post> )
                }
            </div>
        </div>
    );
};

export default Posts;