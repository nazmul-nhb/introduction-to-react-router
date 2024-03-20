import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className='border border-green-900 p-2 rounded-lg'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User;