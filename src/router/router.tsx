import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorLayout from "../layout/ErrorLayout";
import HomePage from "../pages/HomePage";
import PokemonsPage from "../pages/PokemonsPage";

export const router=createBrowserRouter([
    {path:'/', element:<MainLayout/>, errorElement:<ErrorLayout/>, children:[
        {index:true, element:<HomePage/>},
            {path:'/pokemon', element:<PokemonsPage/>},
            {path:'/pokemon/:name', element:<PokemonsPage/>},
        ]}
])