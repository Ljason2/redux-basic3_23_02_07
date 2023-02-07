import productList from "../productList.json"
import {BsCart} from 'react-icons/bs';
import "./Cart.css"
import { useSelector,useDispatch } from "react-redux";
import {removeFormCart, clearAllItem} from "../redux/CartSlice"
function Cart(){
    
    const {cartProductId} = useSelector(state => state.cart);
    const cartProductData= productList.products.filter( item=> cartProductId.includes(item.id));
    
    let dispatch=useDispatch();
    return(
        <div>
            <h3>item in cart</h3>

            <div className="boxCart">
            {cartProductData.map((item)=> {return <figure key={item.id}>
            <img src={`${item.imageUrl}`} alt={item.name} />
            <figcaption>
                <dl>
                    <dt>{item.name}</dt>
                    <dd>{item.details}</dd>
                    <dd><button type="button"
                    onClick={()=> dispatch(removeFormCart(item.id))}
                    >삭제</button></dd>
                </dl>
            </figcaption>
        </figure>}
        )
}


</div>

<footer>
    <p><button type="button"
    onClick={()=> dispatch(clearAllItem())}
    >비우기</button></p>
  {(cartProductData.length<1)  && (<div><BsCart />
    <p>장바구니가 비었습니다 <br />
    카트에 종목을 추가하지 않습니다.</p>
    
    </div>)}
</footer>
        </div>
    )
}


export default Cart;

// cartProductData 는 내가 추가한 item.id 값들을 가지고 있는 객체들의 배열.