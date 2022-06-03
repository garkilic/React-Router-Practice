import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			<h1>Navbar</h1>
			<Link to="/" style={{ padding: "1rem" }}>
				Home
			</Link>
			<Link to="/about" style={{ padding: "1rem" }}>
				About
			</Link>
			<Link to="/profile" style={{ padding: "1rem" }}>
				Profile
			</Link>
		</nav>
	);
}
