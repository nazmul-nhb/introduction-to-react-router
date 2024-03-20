import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    // useState --> data
    // useState --> loader
    // useEffect
    // fetch --> state set --> set state

const users = useLoaderData()

    return (
        <div className="max-w-[1920px] w-full md:px-24 mt-16 mx-auto">
            <h2>Our Users: {users.length}</h2>
            <p className="mb-5">Fantastic and Vodro Users!</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;