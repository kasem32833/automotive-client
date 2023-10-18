import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Root from "./layouts/Root";
import Home from "./assets/pages/Home";
import Error from "./assets/pages/Error";
import Addproduct from "./assets/pages/Addproduct";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children: [
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/addproduct',
          element:<Addproduct></Addproduct>
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