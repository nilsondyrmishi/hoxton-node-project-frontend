import {Link} from "react-router-dom";

 function Item({item}){
    return(
    <li>
        <Link to={`/items/${item.id}`} >
            <article>
                <img src={item.image}
                     alt={item.title} />
                <h3>{item.title}</h3>
            </article>
        </Link>
    </li>)
}
export default Item
