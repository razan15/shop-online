import React from 'react';
import Product from './Product';
import './Main.css';

export default function Main(props) {
  const {products, onAdd } = props;
    return (
        <div className="Main">
              <h2>Products</h2>
          <div className="productMap">
              {products.map((product) =>(
              <Product key={product.id} product={product} 
              onAdd={onAdd}></Product> 
              ))}
          </div>
        </div>
     );
}
