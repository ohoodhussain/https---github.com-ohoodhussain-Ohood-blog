//create sfc function 
const NavBar = () => {
    return ( 
        <div className="navBar">
            <h1 className="logo">
                OHOOD Blog
            </h1>
            <div className="navBarLinks">
                <a href="/">
                    Home
                </a>
                <a href="/">
                    About
                </a>
                <a href="/">
                    Contact
                </a>
            </div>

        </div>
     );
}
 
export default NavBar;