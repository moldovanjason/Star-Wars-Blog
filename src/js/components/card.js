import React from "react";

//create your first component
export const Card = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
			</div>
		</div>
	);
};
