import { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = items.findIndex(
      (itemz) => itemz.id === item.id
    );

    const existingCartItem = items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: Number(existingCartItem.quantity) + Number(item.quantity),
      };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
      updateItems(updatedItems);
    } else {
      updateItems([...items, item]);
    }

    //console.log('inside addItemToCartHandler', cartContext)

    const amount = totalAmount + item.price * item.quantity;
    updateTotalAmount(amount);
  };

  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
