import React from "react";
import { Navbar } from "../components/navBar";
import { Card } from "../components/card";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			char: [],
			planets: []
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
				return <Card key={cardIndex} character={character} />;
			});
		} else {
			console.log("loading...");
		}

		return (
			<div className="container-fluid">
				<Navbar />

				<div className="heading" />
				<div className="navBar">B</div>
				<div className="cards">{charCards}</div>
			</div>
		);
	}
}
