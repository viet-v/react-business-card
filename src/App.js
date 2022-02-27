import React from "react";
import Info from "./components/Info.js";
import About from "./components/About.js";
import Interests from "./components/Interests.js";
import Socials from "./components/Socials.js";
import './style.css'

export default function App () {
    return (
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Socials />
        </div>
    )
}