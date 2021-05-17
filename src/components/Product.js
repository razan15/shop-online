import React from 'react';
import './Product.css';

export default function Product(props) {
    const {product, onAdd } = props;
    return (
        <div className="pic">
          
         <img className="image" src={product.image} alt={product.name} />
         <h3>{product.name}</h3>
         <div>${product.price}</div> 

        <div>
        <button onClick={() => onAdd
        (product)}>Add to Cart</button>
      </div>
      </div>
    );
}
