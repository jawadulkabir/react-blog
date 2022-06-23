const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>The Dojo Blog</h2>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "cadetblue",
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;