import React from "react";
import { Navbar } from "../components/navBar";
import { Card } from "../components/card";
import { Planets } from "./planets";
//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			char: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.dev/api/people/")
			.then(response => response.json())
			.then(characters => this.setState({ char: characters.results }));
	}

	render() {
		var charCards = null;
		if (this.state.char.length > 1) {
			charCards = this.state.char.map((character, cardIndex) => {
				return <Card key={cardIndex} name={character.name} />;
			});
		} else {
			// console.log("loading...");
		}

		return (
			<div className="container-fluid">
				<Navbar />
				<div className="cards">{charCards}</div>
				<Planets />
			</div>
		);
	}
}
