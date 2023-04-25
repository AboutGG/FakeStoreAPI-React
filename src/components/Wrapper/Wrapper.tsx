import React from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import ListProducts from '../ListProducts/ListProducts'
import Product from '../Product/Product'

export const Wrapper = () => {
  const [products, setProducts, isLoading] = useProducts();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
              <React.Fragment>
                <ListProducts products={products}/>
                <Outlet/>
              </React.Fragment>
            }>
          <Route path='/:id' element={<Product setProducts={setProducts} products={products}/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


