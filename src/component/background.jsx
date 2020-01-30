import React from "react";
import PropTypes from "prop-types";
import Logo from "../img/circle-cropped.png"
import Countdown from "./countdown"
import {FaAngleDoubleDown} from 'react-icons/fa'
import "./Logo.css"


import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
				<img className="logo" src={Logo}/>
				<Countdown date={`2020-02-01T00:00:00`}/>
					{/* offset can be cahnged in node modules wowjs default file */}
					<a href="https://pulse2020.typeform.com/to/Eu1RLD">
					<button
						className={"work-button"}
						data-wow-offset="0"
						>
						Register
					</button>
					</a>
					<br/>
					<FaAngleDoubleDown
					className={this.props.bounceIn}
					style={{marginBottom: "-3em"}}
					onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}/>

				</div>

			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
