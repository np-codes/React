import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './Components/Cart';


const Applayout = () => {
    const [username,setusername] = useState("");

    useEffect(()=>{
        const data = {
            name: "Nish"
        };
        setusername(data.name)
    },[])

    return(
        <Provider store = {appStore}>
            <UserContext.Provider value={{LoggedInUser:username , setusername}}>
                <div className='App'>
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);


