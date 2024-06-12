import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';

const Applayout = () => {
    return(
        <div className='App'>
            <Header/>
            <Outlet/>
        </div>
    )
}

const Grocery = lazy(()=> import('./Components/Grocery'));

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children : [
            {
                path:"/",
                element: <Body/>
            }, 
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>We are Loading..</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);


