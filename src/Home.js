import { useState, useEffect } from "react"
import Bloglist from "./Bloglist"

const Home = () => {
    const handleClick = (e) => {
        console.log('click click',e)
    }

    const handleClick2 = (name,e) => {
        console.log('Klick click '+name,e)
    }

    //let name = 'mario'
    //useState hook to change something on the page dynamically. the html needs to re-render

    //useState hook returns the variable that is reactive and a function to change that variable name.
    //'mario' is the initial value of the variable
    const [name,setName] = useState('mario')
    const handleClick3 = () => {
        setName('batali')
    }




    const testobj = [
        {
            'title': 'blog 1',
            'body': 'blog 1 content',
            'author': 'Pussy',
            'id': 1
        },
        {
            'title': 'blog 2',
            'body': 'blog 2 content',
            'author': 'Sil',
            'id': 2
        },
        {
            'title': 'blog 3',
            'body': 'blog 3 content',
            'author': 'Chris',
            'id': 3
        },
    ]
    const [blogs,setBlogs] = useState(null) //null doesn't work

    const handleDelete = (id) => {
        if (blogs!=null){
            const newBlog = blogs.filter((blog) => blog.id!==id);
            setBlogs(newBlog);
        }
        else{
            setBlogs(null)
        }
    }
    // filter method keeps those elements that return true, and filters the others out



    //function runs every time the component is rendered (state change)
    //does not return anything unlike useState
    // useEffect(() => {
    //     console.log("use effect ran");
    // },[name])  //runs only if name state changes //[] is the dependency array of useEffect
            //empty array causes the function to run only once upon the first render


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            setBlogs(data)
        })
    }, [])
     
    return (
        <div className="home">  
            <h1>Homepage</h1>

            <button onClick={handleClick}>click me</button>
            <button onClick={(e) =>handleClick2('jawad',e)}>click me</button>
            {/* curly braces signify dynamic value */}

            <div className="button-state">
                <p>{name}</p>
                <button onClick={handleClick3}>state change button</button>
            </div>
            
            {/* pass blogs, title and handleDelete as props to Bloglist */}
            {blogs && <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author === "Pussy")} title="Pussy Blogs" handleDelete={handleDelete}/>}

        </div>
        
    );
}
 
export default Home;