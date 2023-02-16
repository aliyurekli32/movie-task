import {render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavbarR from "../Navbar";
import userEvent from "@testing-library/user-event";
import useAuth from "../../helper/zustand";

const MockFilmNavbar =({title})=>{
    const user=useAuth(state=>state.user)
    console.log(user)
    return(
        <BrowserRouter>
        <NavbarR title={title}/>
        </BrowserRouter>
    )

}


describe("find user auth", ()=>{
    it("should find user",()=>{
       const mock = render(<MockFilmNavbar/>);
        console.log(mock)
        expect(user).toBe(undefined)
    })
  
})


// describe("go to wanted page",()=>{
//     it("it should go to desired page", ()=>{
//         render(<MockFilmNavbar/>);
//         const buttonElHome = screen.getByText(/Home/i);
//         expect(buttonElHome).toBeInTheDocument();
//     });
//     it("it should render Home", ()=>{
//         render(<MockFilmNavbar/>);
//         const buttonElHome = screen.getByRole("button",{name:"Home"});
//         expect(buttonElHome).toBeEnabled();
//     });
//     it("it should render Login", ()=>{
//         render(<MockFilmNavbar/>);
//         const buttonElLogin = screen.getByRole("button",{name:"Login"});
//         userEvent.click(buttonElLogin);
//         expect(window.location.href).toBe("http://localhost/login")
//     });
//     it("it should render Register", ()=>{
//         render(<MockFilmNavbar/>);
//         const buttonElRegister = screen.getByRole("button",{name:"Register"});
//         userEvent.click(buttonElRegister);
//         expect(window.location.href).toBe("http://localhost/register")
//     });

    // it("it should render Home", ()=>{
    //     render(<MockFilmNavbar/>);
    //     const buttonElHome = screen.queryByRole("button",{name:"Logout"});
    //     expect(buttonElHome).toBeNull()
    // });

// });
