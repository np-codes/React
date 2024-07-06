import Mul from "../Components/Mul";

test("Mul component should perform multiplication",()=> {
    const result =  Mul(5,10);
    //this 
    expect(result).toBe(50);
});