import {Link} from "react-router-dom";

function NotFound(){
    return(
        <main>
            <h2>404 - Not Found :/</h2>
            <Link to='/items'> Home page</Link>
        </main>
    )
}
export default NotFound()
