import { createSlice} from "@reduxjs/toolkit";




let cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartProductId:[]
    },
    reducers:{
        addToCart(state,action){
        state.cartProductId = [action.payload, ...state.cartProductId]
        },
        removeFormCart(state,action){
           const indexOfId=state.cartProductId.indexOf(action.payload);
           state.cartProductId.splice(indexOfId,1)
        },
        clearAllItem(state){
            state.cartProductId=[]
        }
    }
})


export let {addToCart,removeFormCart,clearAllItem} = cartSlice.actions;



export default cartSlice;
