import React from 'react';
import Cookies from 'js-cookie';
import lodash from 'lodash';

interface CartContextData {
  items: any;
  subtotal: number;
  shipping: number;
  total: number;
  handleAddItem: (any) => void;
  handleRemoveItem: (any) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
  items: any;
  subtotal: number;
  shipping: number;
  total: number;
}

export const CartContext = React.createContext({} as CartContextData)

export function CartProvider({ children, ...rest }: CartProviderProps) {
  const [subtotal, setsubtotal] = React.useState(rest.subtotal ?? 0)
  const [shipping, setshipping] = React.useState(rest.shipping ?? 0)
  const [total, settotal] = React.useState(rest.total ?? 0)
  const [items, setitems] = React.useState(rest.items ?? [])


  const handleAddItem = (item:any) => {
    let itemsactuals = items;
    itemsactuals.push(item);

    let subtotalcart = lodash.sumBy(itemsactuals, i => i.price)
    let shippingvalue;
    if (subtotalcart > 250) {
      shippingvalue = 0;
    } else {
      shippingvalue = shipping + 10;

    }

    setsubtotal(subtotalcart);
    setshipping(shippingvalue);
    settotal(subtotalcart + shippingvalue);
    setitems(itemsactuals);
  }


  const handleRemoveItem = (item:any) => {

    let newitems = lodash.filter(items, i => i.id != item.id)

    let subtotalcart = lodash.sumBy(newitems, i => i.price)
    let shippingvalue;
    if (shipping == 0) {
      shippingvalue = newitems.length * 10;
      
    } else {
      if (subtotalcart > 250) {
        shippingvalue = 0;
      } else {
        shippingvalue = shipping;
      }
    }


    setsubtotal(subtotalcart);
    setshipping(shippingvalue);
    settotal(subtotalcart + shippingvalue);
    setitems(newitems);
  }




  return (
    <CartContext.Provider value={{ items, subtotal, shipping, total, handleAddItem, handleRemoveItem }}>
      {children}
    </CartContext.Provider>
  )
}