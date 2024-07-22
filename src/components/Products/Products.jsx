import { useState, useEffect, memo } from "react";
import ProductCard from "../ProductCard";
import useWindowSize from "../../hooks/useWindowSize";
// export let d = 200;

// const products = [
//   {
//     title: "Apple iPhone 14",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Apple iPhone 13",
//     price: "Rs. 70,000"
//   },
//   {
//     title: "Google Pixel 7",
//     price: "Rs. 50,000"
//   },
//   {
//     title: "Nokia 1100",
//     price: "Rs. 2,000"
//   },
//   {
//     title: "Samsung Galaxy S10",
//     price: "Rs. 1,00,000"
//   },
//   {
//     title: "Sony Xperia S10",
//     price: "Rs. 1,00,000"
//   }
// ]

function Products() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  console.log(useWindowSize());

  useEffect(function () {
    fetch('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products').then((response) => {
      return response.json();
    }).then((res) => {
      console.log(res);
      setProducts(res);
      setLoading(false);
    })
  }, [])

  if (loading) {
    return (
      <>
        <img alt="loading" src="https://media.tenor.com/XasjKGMk_wAAAAAM/load-loading.gif" />
      </>
    )
  } else {
    return (
      <div>
        {
          products.map(function(product, index) {
            return (<ProductCard product={product} key={index} />)
          })
        }
      </div>
    )
  }
}

export default memo(Products);

// props = {product: {} , key: 1}
// function ProductCard({product})

// function abc({products, count}) {}
// abc({ count:1, products:10});

// function Abc({products, count}) {}
// <Abc products={{k:10}} count=1 / >

// props = {products: {k:10} , count: 1}

// function ({id, name, price}) {}