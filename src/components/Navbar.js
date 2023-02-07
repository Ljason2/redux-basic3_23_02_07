
import { AiFillHome } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Navbar.css"


function Navbar(){

    const {cartProductId} = useSelector((state)=> state.cart)
    return(
            <nav>
                <ul>
                    <li><Link to="/"><AiFillHome /></Link></li>
                    <li><Link to="/cart"><BsFillCartCheckFill />
                    <span>{cartProductId.length}</span>
                    </Link></li>
                </ul>
            </nav>
    )
}



export default Navbar;