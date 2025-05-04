import React from 'react';
import {render,screen} from '@testing-library/react' ; //on every change rendering
import '@testing-library/jest-dom/extend-expect'; // done to delay the check (in milliseconds)
import Hero from "../landing_page/home/Hero";

//Test Suite
describe('Hero Component',()=>{
    test('renders hero image',()=>{ //shows in terminal
        render(<Hero/>); //load Hero component
        const heroImage = screen.getByAltText("Hero Image"); //trying to read image on screen after Hero component has rendered whose alt text is "Hero Image"
        expect(heroImage).toBeInTheDocument(); //should be available in document that image(matching done between expected output and available outout)
        expect(heroImage).toHaveAttribute('src','media/images/homeHero.png'); // the c
    })
})

