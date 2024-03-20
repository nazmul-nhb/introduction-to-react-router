import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div className="max-w-[1920px] w-full md:px-24 mt-16 mx-auto">
            <h3>Post Details About: {id}</h3>
            <h4>Title: {title}</h4>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;