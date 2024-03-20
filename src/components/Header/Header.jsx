import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="max-w-[1920px] w-full md:px-24 mt-16 mx-auto flex flex-col gap-8">
            <h2 className="text-green-800 font-extrabold text-4xl">Introduction to React Router</h2>
            <nav className="flex justify-between gap-5">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;