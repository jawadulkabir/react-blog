const Bloglist = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;


    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {/* posts and author info in blog home */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ) //body of anonymous function. usually curly brace.
              //but maybe html, thats's why parentheses???

            ) //parameter of the map function

            } 
            {/* in the return function, its mostly html, called jsx
            javascript can also be written, bounded by curly braces */}
        </div>
     );
}
 
export default Bloglist;