import { BrowserRouter } from "react-router-dom";
import MockList from "../mocks/mockResListData.json";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Components/Body";
import Header from "../Components/Header";
import appStore from "../utils/appStore";
import UserContext from "../utils/UserContext";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { useState } from "react";
import useStatusCheck from "../utils/useStatusCheck";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MockList);
        }
    })
})

// Mock the useStatusCheck hook
describe("Internet checking",()=>{
    jest.mock('../utils/useStatusCheck', () => ({
        useStatusCheck: jest.fn().mockReturn(false),
    }));
    
    test("Checking Internet Connection",async()=>{
        await act(async()=> render(
            <Provider store={appStore}>
                    <BrowserRouter>
                        <Header/>
                        <Body/>
                    </BrowserRouter>
            </Provider>
        ));

        //expect( screen.getByRole("heading",{name:"Please check your internet connection..."})).toBeInTheDocument();
        expect(screen.getByText("Status: 😖")).toBeInTheDocument();
    })
})



test("Changing Username on clicking clicktochange button",async()=>{
    const TestWrapper = ({ children }) => {
        const [username, setUsername] = useState("Default User");
        return (
            <UserContext.Provider value={{ LoggedInUser: username, setusername: setUsername }}>
                {children}
            </UserContext.Provider>
        );
    };
// TestWrapper will work as UserContext but includes useState which work as dummy place for changing name
// Children here are Header abd Body component
    await act(async()=> render(
        <Provider store={appStore}>
            <TestWrapper >
                <BrowserRouter>
                    <Header/>
                    <Body/>
                </BrowserRouter>
            </TestWrapper>
        </Provider>
        
    ));
    const changeinput = screen.getByTestId("changebar");
    fireEvent.change(changeinput, {target : {value: "Nish"}});
    fireEvent.click(screen.getByTestId("changebtn"));
    expect(screen.getByRole("heading", {name:"Nish"})).toBeInTheDocument();
    
});



test("Searching burger and filtering out the restaurant card list",async()=>{
    await act(async()=> render(<BrowserRouter><Body/></BrowserRouter>));
    const cardbeforesearch = screen.getAllByTestId("rescard");
    expect(cardbeforesearch.length).toBe(10);
    const searchbtn = screen.getByRole("button",{name:"Search"});
    const searchinput = screen.getByTestId("searchbar");
    fireEvent.change(searchinput,{target: {value: "burger"}});
    fireEvent.click(searchbtn);
    const cardaftersearch = screen.getAllByTestId("rescard");
    expect(cardaftersearch.length).toBe(1);
});

test("Top Rated and filtering out restaurant card onclick",async()=>{
    await act(async()=> render(<BrowserRouter><Body/></BrowserRouter>));
    const cardbeforefilter = screen.getAllByTestId("rescard");
    expect(cardbeforefilter.length).toBe(10);
    const topratedbtn = screen.getByRole("button",{name:"Top Rated"});
    fireEvent.click(topratedbtn);
    const cardafterfilter = screen.getAllByTestId("rescard");
    expect(cardafterfilter.length).toBe(9);
});

