import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Component/Products/Products';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Cart from './Component/Cart/Cart';
import Brand from './Component/Brand/Brand';
import NotFound from './Component/NotFound/NotFound';
import Layout from './Component/Layout/Layout';
import ProtectedRoute from './Component/ProtectRoute/ProtectRoute';
import Forget from './Component/Forget/Forget';
import ResetCode from './Component/ResetCode/ResetCode';
import NewPassword from './Component/NewPassword/NewPassword';
import DetailsProducts from './Component/DetailsProducts/DetailsProducts';
import Orders from './Component/Orders/Orders';


export default function App() {


  let routes = createBrowserRouter([{
    path: '/', element: <Layout></Layout>, children: [
      { index: true, element: <ProtectedRoute> <Home></Home></ProtectedRoute> },
      { path: '/products', element: <ProtectedRoute><Products></Products></ProtectedRoute> },
      { path: '/cart', element: <ProtectedRoute> <Cart></Cart> </ProtectedRoute> },
      { path: '/register', element: <Register></Register> },
      { path: '/forget', element: <Forget></Forget> },
      { path: '/allorders', element: <Orders></Orders> },
      { path: '/newpassword', element: <NewPassword></NewPassword> },
      { path: '/detailsproduct/:id/:categoryId', element: <ProtectedRoute><DetailsProducts></DetailsProducts></ProtectedRoute>},
      { path: '/reset', element: <ResetCode></ResetCode> },
      { path: '/login', element: <Login></Login> },
      { path: '/brand', element: <ProtectedRoute><Brand></Brand></ProtectedRoute> },
      { path: '*', element: <NotFound></NotFound> }
    ]
  }])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
