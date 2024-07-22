import './ProductCard.css';
// import Rating from './Rating.js'
import ReduxAddToCart from '../ReduxAddToCart';
function ProductCard({ product }) {
  // console.log("product cart", product.id);
  return (
    <div className="card">
      <div>
        {product.title}
      </div>
      <div>
        {product.price.value}
      </div>
      <ReduxAddToCart product={product}/>
    </div>
  )
}

export default ProductCard;