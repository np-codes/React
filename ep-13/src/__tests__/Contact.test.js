import { getAllByPlaceholderText, getAllByRole, getByRole, render,screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import '@testing-library/jest-dom';

describe ("Contact us loading...",()=>{
    test ("Should load the Contact Component",()=>{
        render(<Contact/>);
        const heading = screen.getAllByRole("heading");
        expect(heading.length).toBe(3);
    });
    
    test ("Should load button from the Contact Component",()=>{
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test ("Should load input from the Contact Component",()=>{
        render(<Contact/>);
        const inputfirst = screen.getByPlaceholderText("First name");
        expect(inputfirst).toBeInTheDocument();
    });
    
    test ("Should load 2 input boxes from the Contact Component",()=>{
        render(<Contact/>);
        const inputboxes = screen.getAllByRole("textbox");
        expect(inputboxes.length).toBe(2);
    });
})
