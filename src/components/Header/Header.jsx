
const Header = () => {
    return (
        <div>
            <h2 className="text-green-800">Navigation</h2>
            <nav className="flex justify-between gap-4">
                <a href="/Home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;