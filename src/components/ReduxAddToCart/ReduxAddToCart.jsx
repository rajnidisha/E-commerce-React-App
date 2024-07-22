import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../../stores/cartR.js'
function ReduxAddToCart({ product }) {
  // const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  // console.log("add to cart", product.id);
  let dispatch = useDispatch();

  let quantity = useSelector((state) => {
    return state.cart.items[product.id]?.quantity || 0;
  });

  function decrease() {
    dispatch(removeFromCart(product));
  }
  // function increment() {
  //   dispatch({ type: "ADD_TO_CART", payload: product });
  // }
  function increment() {
    dispatch(addToCart(product));
  }

  if (quantity === 0) {
    return (
      <div>
        <button onClick={increment}>
          Add To Cart
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={decrease}> - </button>
        <span> {quantity} </span>
        <button onClick={increment}> + </button>
      </div>
    );
  }
}
export default ReduxAddToCart;