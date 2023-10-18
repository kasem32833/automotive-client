import {createBrowserRouter} from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./assets/pages/Home";
import Error from "./assets/pages/Error";
import Addproduct from "./assets/pages/Addproduct";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import Mycart from "./assets/pages/Mycart";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children: [
        {
          path:'/',
          element:<Home></Home>,
          loader: ()=>fetch('http://localhost:5000/cars')
        },
        {
          path:'/addproduct',
          element:<Addproduct></Addproduct>
        },
        {
          path:'/mycart',
          element:<Mycart></Mycart>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        

      ]
    },
  ]);

  export default router;