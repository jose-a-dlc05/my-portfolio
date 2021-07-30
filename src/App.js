import React from "react";
import Navbar from "./components/Navbar.component";
import About from "./components/About.component";
import Projects from "./components/Projects.component";
import Skills from "./components/Skills.component";
import Contact from "./components/Contact.component";

export default function App() {
	return (
		<main className='text-gray-400 bg-gray-900 body-font'>
			<Navbar />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</main>
	);
}
