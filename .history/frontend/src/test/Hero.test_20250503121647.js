import React from "react";
import {render,screen} from "@testing-library/react" ; //on every change rendering
import '@testing-library/jest-dom'; // jest testing
import Hero from "../landing_page/home/Hero";

//Test Suite
describe('Hero Component',()=>{
    test('renders hero image',()=>{ //shows in terminal ()
        render(<Hero/>); //load Hero component
        const heroImage = screen.getByAltText("Hero Image"); //trying to read image on screen after Hero component has rendered whose alt text is "Hero Image"
        expect(heroImage).toBeInTheDocument(); //image should be available in document (matching done between expected output and available outout)
        expect(heroImage).toHaveAttribute('src','media/images/homeHero.png'); // the source of the image should match with the given src
    });
    test('renders signup button',()=>{ 
        render(<Hero/>); //load Hero component
        const signupButton = screen.getByRole('button',{name:"SignUp Now"}); 
        expect(signupButton).toBeInTheDocument(); 
        expect(signupButton).toHaveClass("btn-primary"); 
    })
})

