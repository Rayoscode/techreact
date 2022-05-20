import { createContext ,useState, Children } from "react";



export const CartContext = createContext({
    Cart:[],
    addToCart: () => {},
    deleteFromCart: () => {},
    clear: () => {},
    isInCart: () => {}
});

const CartProvider  = ({children}) => {

    const [Cart, setCart] = useState([]);

    const addToCart =  (Item,Cantidad) => {
        setCart((CurrenCartState)=> { 
            let newItem = true
            for(let i =0; i< CurrenCartState.length && newItem ; i++){ // Podria haber usado isInCart despues lo modifico
                if (CurrenCartState[i].Item === Item){
                    CurrenCartState[i].cantidad += Cantidad;
                    newItem = false;
                }
            }
            if (newItem){
                CurrenCartState.push({Item,Cantidad});
            }
            return CurrenCartState;
        })
    }

    const deleteFromCart = (ItemId ) =>{
        setCart ((CurrentCartState)=>{
            return CurrentCartState.filter((itemCart)=> itemCart.Item.id !== ItemId );
        })
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (ItemId) =>{
        
        return (Cart.findIndex((CartItem)=> CartItem.Item.id ===ItemId) !== -1) ? true : false
    }

    const context = {
        Cart,
        addToCart,
        deleteFromCart,
        clear,
        isInCart
    }

    return(
        <CartContext.Provider value={context}>
        {children}
        </CartContext.Provider>
    );

}

export default CartProvider;
