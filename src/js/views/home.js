import React from "react";
import Navbar from "../components/navBar";
import Card from "../components/card"

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="container-fluid">
				<./ navBar />
				<card />
				<div className="heading">A</div>
				<div className="navBar">B</div>
				<div className="cards">C</div>
			</div>
		);
	}
}
