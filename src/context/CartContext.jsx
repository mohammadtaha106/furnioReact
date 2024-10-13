import { createContext, useState } from "react";

export const CartContext = createContext();
function CartContextProvider({ children }) {
  const [cartItems, setcartItems] = useState([]);

  function addItemsToCart(item) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == item.id);

    if (itemIndex == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setcartItems([...arr]);
  }

  function decreaseItemToCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    arr[itemIndex].quantity--;

    setcartItems([...arr]);
  }
  function removeItemFromCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);

    arr.splice(itemIndex, 1);

    setcartItems([...arr]);
  }

  function isItemAdded(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);

    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  }
  return (
    <CartContext.Provider
      value={{ cartItems,decreaseItemToCart, isItemAdded, addItemsToCart, removeItemFromCart ,setcartItems}}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
