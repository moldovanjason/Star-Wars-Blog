import React from "react";
import PropTypes from "prop-types";

//create your first component
export const Card = props => {
	return (
		<div className="card" key={props.keyIndex} style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<p className="card-text">{props.character.name}</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	character: PropTypes.object,
	keyIndex: PropTypes.number
};
