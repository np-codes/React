import { render, screen } from "@testing-library/react";
import RestaurantCard, { RestaurantOpenLabel } from "../Components/RestaurantCard";
import MockData from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Load Restaurant card using mock data",async()=>{
    render(<RestaurantCard res={MockData}/>);
    const name = await screen.findByText("Pizza Hut");
    expect(name).toBeInTheDocument();
});

const RestaurantwrappedCard = RestaurantOpenLabel(RestaurantCard);
test("Load Restaurant card using mock data and test OPEN status",async()=>{
    render(<RestaurantwrappedCard res={MockData}/>);
    const openbox = await screen.findByText("Open");
    expect(openbox).toBeInTheDocument();
})