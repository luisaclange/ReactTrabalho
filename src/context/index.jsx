import React from 'react';

import Shop from './shop';

const AppProvider = ({ children }) => {
  return (
    <Shop>
      {children}
    </Shop>  
  )  
}

export default AppProvider;