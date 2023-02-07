import { useDispatch, useSelector } from "react-redux"
import productList from "../productList.json"
import "./Home.css"
import {addToCart,removeFormCart} from "../redux/CartSlice"



function Home(){
    const dispatch = useDispatch();
    const {cartProductId} =useSelector(state => state.cart)




    return(
        <div className="boxHome">
            {
        productList.products.map((item)=>
        {return <figure key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <figcaption>
                <dl>
                    <dt>{item.name}</dt>
                    <dd>{item.price}</dd>
                    <dd>                    
                    {(!cartProductId.includes(item.id)) && (<button type="button"
                    onClick={
                        ()=>{return dispatch(addToCart(item.id))}}
                    >추가</button>)}
                
                  {(cartProductId.includes(item.id))&&(<button type="button"
                    onClick={
                        ()=>{return dispatch(removeFormCart(item.id))}
                    }
                    >삭제</button>)}
                    </dd>
                </dl>
            </figcaption>
        </figure>}
        )

}
        </div>
    )
}


export default Home;