import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oops..</h2>
            <p>The page you are looking for could not be found.</p>
            <Link to="/">Clck here to go back to Home</Link>
        </div>
    );
}
 
export default NotFound;