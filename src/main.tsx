import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';

import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Product from './pages/Product.tsx';
import Cart from './pages/Cart.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    errorElement : <ErrorPage />,
    children : 
    [
      {index : true, element : <Home />},
      {path :  "products", element : <Product />},
      {path : "about", element:<About />},
      {path : "product" , element : <Product/>},
      {path : "cart" , element : <Cart/>},

    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
