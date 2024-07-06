import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import Header from "../Components/Header";

it("Header componenet should load login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    //const loginbtn = screen.getByText("Login");
    const loginbtn = screen.getByRole("button",{name:"Login"});
    expect(loginbtn).toBeInTheDocument();
});

it("Header componenet should load Cart with items",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartwithitem = screen.getByText(/🛒-\d+/);
    expect(cartwithitem).toBeInTheDocument();
});

it("Header componenet should load Cart with items",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const justcart= screen.getByText(/🛒/);
    expect(justcart).toBeInTheDocument();
});

it("Header componenet should load login and onclick change it to logout",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginbtn = screen.getByRole("button", {name: 'Login'});
    fireEvent.click(loginbtn);
    const logoutbtn = screen.getByRole("button",{name:'Logout'});
    expect(logoutbtn).toBeInTheDocument();
});