"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";


type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;

  size?: string;
  color?: string;

  quantity: number;
};



type CartContextType = {

  cart: CartItem[];

  addToCart: (
    item: Omit<CartItem, "quantity">
  ) => void;


  increaseQuantity: (
    id: number,
    size?: string,
    color?: string
  ) => void;


  decreaseQuantity: (
    id: number,
    size?: string,
    color?: string
  ) => void;


  removeFromCart: (
    id: number,
    size?: string,
    color?: string
  ) => void;


  clearCart: () => void;

};



const CartContext =
  createContext<CartContextType | null>(null);




export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [cart, setCart] =
    useState<CartItem[]>([]);




  useEffect(() => {

    const saved =
      localStorage.getItem("cart");


    if (saved) {

      setCart(
        JSON.parse(saved)
      );

    }

  }, []);





  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);







  const addToCart = (
    item: Omit<CartItem, "quantity">
  ) => {


    setCart((prev) => {


      const existing = prev.find(
        (p) =>
          p.id === item.id &&
          p.size === item.size &&
          p.color === item.color
      );



      if (existing) {

        return prev.map((p) =>

          p.id === item.id &&
          p.size === item.size &&
          p.color === item.color

            ? {
                ...p,
                quantity:
                  p.quantity + 1,
              }

            : p

        );

      }




      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];

    });

  };









  const increaseQuantity = (
    id: number,
    size?: string,
    color?: string
  ) => {


    setCart((prev) =>

      prev.map((item) =>

        item.id === id &&
        item.size === size &&
        item.color === color

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item

      )

    );

  };









  const decreaseQuantity = (
    id: number,
    size?: string,
    color?: string
  ) => {


    setCart((prev) =>

      prev

        .map((item) =>

          item.id === id &&
          item.size === size &&
          item.color === color

            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }

            : item

        )

        .filter(
          (item) =>
            item.quantity > 0
        )

    );

  };









  const removeFromCart = (
    id: number,
    size?: string,
    color?: string
  ) => {


    setCart((prev) =>

      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size &&
            item.color === color
          )
      )

    );

  };







  const clearCart = () => {

    setCart([]);

  };







  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        clearCart,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}







export function useCart() {


  const context =
    useContext(CartContext);



  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );

  }



  return context;

}