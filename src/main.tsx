import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Products from './pages/Products.tsx';
import Cart from './pages/Cart.tsx';
import ProductList from './components/ProductList.tsx';
import ProductDetails from './components/ProductDetails.tsx';
import ProductCustomize from './components/ProductCustomize.tsx'
import Shop from './pages/Shop.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    errorElement : <ErrorPage />,
    children : 
    [
      {index : true, element : <Home />},
      {path : "cart" , element : <Cart/>},
      {path : "about" , element : <About/>},
      {path : "shop" , element : <Shop/>,
        children : [
            {   index :  true, element : <ProductList />} ,        
             {   path : "productID" , element : <ProductDetails/>,
                children : [
                  {
                    path : "customize"  , element : <ProductCustomize/>,
                  }
                ]
              },
            ]
          },
      ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
