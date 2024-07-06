import { act, fireEvent, render, screen } from "@testing-library/react";
import MockData from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import RestaurantMenu from "../Components/RestaurantMenu";
import MenuCategories from "../Components/MenuCategories";
import Header from "../Components/Header"
import Cart from "../Components/Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve ({
        json: ()=> {
            return Promise.resolve(MockData);
        }
    })
});

test("Should check cart item 0 initially",async()=>{
    await act(async()=> render(
        <BrowserRouter>
            <Provider store ={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    ));
    const carttab = await screen.findByText("🛒-0");
    expect(carttab).toBeInTheDocument();
});

test("Should check for Whopper with 8 items in it",async()=>{
    await act(async()=> render(
        <BrowserRouter>
            <Provider store ={appStore}>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter> 
    ));
    const accordiontitle = screen.getByText("Whopper (8)");
    fireEvent.click(accordiontitle);
    const fooditems = screen.getAllByTestId("fooditem");
    expect(fooditems.length).toBe(8);
});

test ("Should load add btn and clicking on it should increase items in header cart to 1",async()=> {
    await act(()=> render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
    ));
    fireEvent.click( await screen.findByText("Whopper (8)"));
    const addbtn = screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addbtn[0]);
    const carthead = screen.getByText("🛒-1");
    expect(carthead).toBeInTheDocument();
});

test ("Clicking on item should increase items in header cart to 2",async()=> {
    await act(()=> render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
    ));
    fireEvent.click( await screen.findByText("Whopper (8)"));
    fireEvent.click(screen.getAllByRole("button",{name:"Add +"})[1]);
    const carthead = screen.getByText("🛒-2");
    expect(carthead).toBeInTheDocument();
});


test("Click on addbtn should add a item card on Cart Page", async()=> {
    await act(()=> render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ));
    fireEvent.click(screen.getByText("🛒-2"));
    const fooditem = screen.getAllByTestId("fooditemincart");
    expect(fooditem.length).toBe(2);
    
});

test("Loading Cart component, removebtn and clicking on it should decrease header cart item and item card from cart page",async()=> {
    await act(async() => render(
        <BrowserRouter>
            <Provider store ={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter> 
    ));
    const removebtn = screen.getAllByRole("button", {name: "Remove"});
    fireEvent.click(removebtn[0]);
    expect(screen.getByText("🛒-1")).toBeInTheDocument();
    expect(screen.getAllByTestId("fooditemincart").length).toBe(1);
});

test("Clear Cart btn working on Cart component", async()=>{
    await act(async() => render(
        <BrowserRouter>
            <Provider store ={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter> 
    ));
    const clearbtn = screen.getByRole("button", {name:"Clear Cart"});
    expect(clearbtn).toBeInTheDocument();
    fireEvent.click(clearbtn);
    const fooditem = screen.getByText("The Cart is Empty....");
    expect(fooditem).toBeInTheDocument();
});