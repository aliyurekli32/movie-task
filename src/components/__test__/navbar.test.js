import {render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavbarR from "../Navbar";
import userEvent from "@testing-library/user-event";

const MockFilmNavbar =({title})=>{
    return(
        <BrowserRouter>
        <NavbarR title={title}/>
        </BrowserRouter>
    )

}

describe("go to wanted page",()=>{
    it("it should go to desired page", ()=>{
        render(<MockFilmNavbar/>);
        const buttonElHome = screen.getByText(/Home/i);
        expect(buttonElHome).toBeInTheDocument();
    });
    

})