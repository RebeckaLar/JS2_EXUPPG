import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'

import RootLayouts from './layouts/RootLayouts'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductItem from './components/ProductItem'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'

import LoginLayouts from './layouts/LoginLayouts'
import Login from './pages/Login'
import Register from './pages/Register'

import LoggedInLayouts from './layouts/LoggedInLayouts'
import OrderHistory from './pages/OrderHistory'

import Footer from './components/Footer'
import ProductsProvider from './contexts/ProductsContext'
import ProductList from './pages/ProductList'
import ProductDetails from './components/ProductDetails'
import CartContextProvider from './contexts/CartContextProvider'

// const router = createBrowserRouter(
//   {
//     element: <RootLayouts />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'productList',
//         element: <ProductList />
//       },
//       {
//         path: 'productList/:productId',
//         element: <ProductDetails />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'checkout',
//         element: <Checkout />
//       },
//       {
//         path: '*',
//         element: <NotFound />
//       },
//     ]
//   },
//   {
//     element: <LoginLayouts />,
//     children: [
//       {
//         path: 'login',
//         element: <Login />
//       },
//       {
//         path: 'register',
//         element: <Register />
//       },
//     ]
//   },
//   {
//     element: <LoggedInLayouts />,
//     children: [
//       {
//         path: 'orderhistory',
//         element: <OrderHistory />
//       },
//     ]
//   },
//   {
//     element: <Footer />
//   }
// )

// måsvingar för att kunna skriva JS/element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <CartContextProvider>
        <BrowserRouter>
            {/* routes är som en switch, hette switch, 
            tittar på url och ge nngt av elementen såsom 
            home faq osv. */}
            
          <Routes> 
                {/* vad har den för path, alltså hur ska url se ut för
                att den ska vara aktiv, */}
            <Route element={ <RootLayouts /> }>
              <Route path ='/' element={ <Home /> } />
              {/* <Route path ='/products' element={ <Products /> } />
              <Route path ='/products/:productItem' element={ <ProductItem /> } /> */}
              <Route path ='/productList' element={ <ProductList /> } />
              <Route path ='/productList/:productId' element={ <ProductDetails /> } />
              <Route path ='/contact' element={ <Contact /> } />
              <Route path ='/checkout' element={ <Checkout /> } />
              <Route path='*' element={ <NotFound />}/>
            </Route>

            <Route element={ <LoginLayouts /> }>
              <Route path='/login' element={ <Login /> } />
              <Route path='/register' element={ <Register /> } />
            </Route>

            <Route element={ <LoggedInLayouts /> }>
              <Route path ='/orderhistory' element={ <OrderHistory /> } />
            </Route>

          </Routes>
          <Footer />

        </BrowserRouter>
      </CartContextProvider>
    </ProductsProvider>
  </StrictMode>
)
