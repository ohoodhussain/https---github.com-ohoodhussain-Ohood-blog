import { useState } from "react";


const Blogs = () => {
    //create state, and set the intial value
    const [blogs, setBlogs] = useState([
        //each opject represnt a blog with uniq id
        {title:"My new blogs website", body:"lorem ipsum....", author: "ohood", date: "06 jun 2023", id:1},
        {title:"My new blogs website", body:"lorem ipsum....", author: "ohood", date: "06 jun 2023", id:2},
        {title:"My new blogs website", body:"lorem ipsum....", author: "ohood", date: "06 jun 2023", id:3}
    ]);
    return ( 
        <div className="blos">
            {/*create the blog preview tamolet */}
            {blogs.map((blog) => (
                /*each root elemint must have a key  to track each item*/
                <div className="previw-contanier" key={blog.id}>
                    <h2 className="title">
                        {blog.title}
                    </h2>
                    <div className="author-date">
                        <p>{blog.author}</p>
                        <p>{blog.date}</p>
                    </div>
                </div>
            ))}
            
        </div>
     );
}
 
export default Blogs;