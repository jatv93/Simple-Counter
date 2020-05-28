import React from "react";

//create your first component
export const Home = ({
	secondsDer,
	secondsIzq,
	minutesDer,
	minutesIzq,
	hoursDer,
	hoursIzq
}) => {
	return (
		<>
			<div className="container">
				<div className="clock">
					<i className="far fa-clock" />
				</div>
				<div className="col">{hoursIzq}</div>
				<div className="col">{hoursDer}</div>
				<p>:</p>
				<div className="col">{minutesIzq}</div>
				<div className="col">{minutesDer}</div>
				<p>:</p>
				<div className="col">{secondsIzq}</div>
				<div className="col">{secondsDer}</div>
			</div>
		</>
	);
};
