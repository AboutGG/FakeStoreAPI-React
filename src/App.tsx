import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { WheaterCity } from './components/Weather/Weather';
import { Products } from './components/Products/Products';
const App = () => {
  const [price, setPrice] = useState(0);
  return(

    <>
    <Products/>
    </>
    /*<div style={{paddingLeft: '30px'}}>
        {isLoading && <p>loading</p>}
        {!isLoading && 
            {city}}
    </div>*/
  );
}

export default App;
