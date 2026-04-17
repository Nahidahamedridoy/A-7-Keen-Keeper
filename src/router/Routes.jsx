import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import States from "../pages/states/States";
import TimeLine from "../pages/timeline/TimeLine";
import FriendsDetails from "../pages/friendDetails/FriendsDetails";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          // path: "/",
          index:true ,
          element: <Homepage/>,
          loader: ()=> fetch ("/data.json")
        },
        {
            path:"/homepage/:id",
            element: <FriendsDetails/>,
            loader: ()=> fetch ("/data.json")
        },
        {
          path: "/timeline",
          element: <TimeLine/>
        },
        {
          path: "/states",
          element: <States/>
        },
      ],
      errorElement: <NotFoundPage/>
    },
  ])