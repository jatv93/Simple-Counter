//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

let secondsDer = 0;
let secondsIzq = 0;
let minutesDer = 0;
let minutesIzq = 0;
let hoursDer = 0;
let hoursIzq = 0;

setInterval(() => {
	secondsDer += 1;
	if (secondsDer == 10) {
		secondsDer = 0;
		secondsIzq++;
	}

	if (secondsIzq == 6) {
		secondsIzq = 0;
		minutesDer++;
	}

	if (minutesDer == 10) {
		minutesDer = 0;
		minutesIzq++;
	}

	if (minutesIzq == 6) {
		minutesIzq = 0;
		hoursDer++;
	}

	if (hoursDer == 10) {
		hoursDer = 0;
		hoursIzq++;
	}

	if (hoursIzq == 10) {
		hoursIzq = 0;
	}

	ReactDOM.render(
		<Home
			secondsDer={secondsDer}
			secondsIzq={secondsIzq}
			minutesDer={minutesDer}
			minutesIzq={minutesIzq}
			hoursDer={hoursDer}
			hoursIzq={hoursIzq}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
