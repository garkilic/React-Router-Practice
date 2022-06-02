import React from "react";
import {Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <h1>Navbar</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    )
}