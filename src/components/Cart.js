import React from 'react';
import './Cart.css';

export default function Cart(props) {
    const { cartItems, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a
    + c.qty * c.price, 0);
    const totalPrice = itemsPrice;

    return (
      <div className="Cart">
              <h2>Cart Items</h2>
          <div>
                {cartItems.length === 0 && 
                  <h3>Cart is empty</h3>}
                {cartItems.map((item) =>(
                      <div key={item.id}
                            className="inside">
                              <div className="itemName">{item.name}</div>
                                    <div className="inside">
                                        <button onClick={() => onRemove(item)}
                                            className="remove">
                                              -
                                        </button>{' '}  
                                    </div>
                                        <div className="text">
                                            {item.qty} X ${item.price.toFixed(2)}
                                        </div>
                      </div>
                  ))}

                {cartItems.length !== 0 && (
                  <>
                    <hr></hr>
                        <div className="inside">
                            <div className="inside">Items Price</div>
                            <div className="text">${itemsPrice.toFixed(2)}</div>
                        </div>
                    
                            <div className="inside">
                                  <div className="inside">
                                      <strong>Total Price</strong>
                                  </div>
                                      <div className="text">
                                          <strong>${totalPrice.toFixed(2)}</strong>
                                      </div>
                            </div>
                    <hr />
                          <div className="checkOut">
                              <button>Checkout</button>
                          </div>
                  </>
                )}
          </div>
      </div>
    );
}


