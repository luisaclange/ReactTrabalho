import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export default function ShopProvider({ children }) {
  const [productsShop, setProductsShop] = useState([]);  

  return (
     <ShopContext.Provider
       value={{productsShop, setProductsShop}}
     >
      {children}
     </ShopContext.Provider> 
  )   
}

export function useShop() {
  const context = useContext(ShopContext);
  
  return context;
}