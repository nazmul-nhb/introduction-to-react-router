import PropTypes from 'prop-types';

const User = ({user}) => {
    const {name, email, phone} = user;
    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User;