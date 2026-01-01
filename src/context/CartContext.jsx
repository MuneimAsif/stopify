// import { createContext, useContext, useState } from "react";

// export const CartContext = createContext(null);
// export const CartProvider = ({ children }) => {
//   const [cartItem, setCartItem] = useState([]);
//   const addToCart = (product) => {
//     const itemInCart = cartItem.find((x) => x.id === product.id);
//     if (itemInCart) {
//       // Increasing quantity if the product is already in cart
//       const updatedCart = cartItem.map((x) =>
//         x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
//       );
//       setCartItem(updatedCart);
//     } else {
//       // Add new item with quantity 1
//       setCartItem([...cartItem, { ...product, quantity: 1 }]);
//     }
//     setCartItem([...cartItem, product]);
//   };
// const updateQuantity = ((productId,action)=>{
//   setCartItem(cartItem.map((x)=>{
//     if(x.id === productId){
//        let newUnit = x.quantity
//        if(action === "increase"){
//         newUnit = newUnit + 1
//        }else if (action === "decrease"){
//         newUnit = newUnit - 1
//        }
//        return newUnit > 0 ? {...x, quantity:newUnit} : null
//     }
//     return x;
//   }).filter((x)=> x != null) // remove item quantity 0
//   )
//  })
//   return ( <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>

// )}

// export const useCart = () => useContext(CartContext)

import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItem");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Cart load nahi ho saka", error);
      return [];
    }
  });
  const addToCart = (product, totalQuantity = 1) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);
    const quantity = Number(totalQuantity);
    if (itemInCart) {
      // Increase quantity if already in cart
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItem(updatedCart);
      toast.success("Product added to cart.");
    } else {
      //Add new ietm with quantity 1
      setCartItem([...cartItem, { ...product, quantity: quantity }]);
      toast.success("Product added to cart.");
    }
  };

  const updateQuantity = (cartItem, productId, action) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
              toast.success("Product added to cart.");
            } else if (action === "decrease") {
              newUnit = newUnit - 1;
              toast.warning("Product removed from cart.");
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null) // remove item qunatity 0
    );
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
    toast.warning("Product removed from cart.");
  };

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);