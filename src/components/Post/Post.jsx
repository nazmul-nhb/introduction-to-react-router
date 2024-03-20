import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='border border-green-700 rounded-lg p-2'>
            <h3>Post of {id}</h3>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <br />
            <button onClick={handleShowDetails}>Click to See Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;