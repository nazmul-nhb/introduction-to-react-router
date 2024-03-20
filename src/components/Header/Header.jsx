import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="max-w-[1920px] w-full md:px-24 mt-16 mx-auto flex flex-col gap-8">
            <h2 className="text-green-800 font-extrabold text-4xl">Introduction to React Router</h2>
            <nav className="flex justify-between gap-5">
                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;