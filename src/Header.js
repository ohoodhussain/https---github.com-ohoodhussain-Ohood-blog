//create sfc function
const Header = () => {
    return ( 
        <div className="header">
            <form>
                <input type="text" placeholder="Search....." />
            </form>
            <button className="create-blog">
                Create new blog
            </button>
        </div>
     );
}
 
export default Header;