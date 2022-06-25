import { Link } from "react-router-dom"
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2 style={{'margin-bottom': '8px','color':'teal'}}>Page not found</h2>
            <Link to='/'>
                Home Page
            </Link>
        </div>
     );
}
 
export default NotFound;