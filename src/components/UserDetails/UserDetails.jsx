import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, address, email, phone} = user;
    const {street, suite, city, zipcode} = address;
    
    return (
        <div className="max-w-[1920px] w-full md:px-24 mt-16 mx-auto">
            <h2>Details About User {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {suite}, {street}, {city}, {zipcode}</p>
        </div>
    );
};

export default UserDetails;