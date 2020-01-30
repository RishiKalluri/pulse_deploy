import React from "react";
import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/pen.png";
import browser from "../img/browser.png";
import myImage from "../img/myImage.png";
import PropTypes from "prop-types";
import "./about.css"

import Abishek from "../img/headshots/Abishek.png"
import Rishabh from "../img/headshots/Rishabh.png"
import Fawaz from "../img/headshots/Fawaz.png"
import Kelly from "../img/headshots/Kelly.png"
import Manas from "../img/headshots/Manas.png"
import Neil from "../img/headshots/Niel.png"
import Ribhav from "../img/headshots/Ribhav.png"
import Rishab from "../img/headshots/Rishab.png"
import Rishi from "../img/headshots/Rishi.png"
import Shayna from "../img/headshots/Shayna.png"
import Shreyas from "../img/headshots/Shreyas.png"

import Joey from "../img/headshots/Joey.png"
import Daksh from "../img/headshots/Daksh.png"
import Cary from "../img/headshots/Cary.png"

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">

				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>

				We cordially invite you to be a part of Pulse 2020 Visions, our 9th annual celebration of ECE and CS innovation at the University of Illinois! Each year, hundreds of students and corporate sponsors, each with their own passions, come together to explore the latest advancements in ECE and Computer Science at our student-run conference. Pulse brings in highly motivated engineers, contributes to an exchange of new ideas, and fosters excitement around innovation. Join us and learn more about our events below!
			<div className="row" >

			<div className="col-6 col-lg-6 hidden move-up">
					<img
						className={"img-fluid profile" + this.props.fadeIn}
						src={Abishek}
						alt=""
						style={{
							borderRadius: 50 + "%",
							height: 250 + "px",
							width: 250 + "px",
						}}
					/>
					<h4>Abishek Venkit</h4>
					<h5>Co-Director</h5>
				</div>
				<div className="col-6 col-lg-6 hidden move-up">
						<img
							className={"img-fluid profile" + this.props.fadeIn}
							src={Rishabh}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<h4>Rishabh Anand</h4>
						<h5>Co-Director</h5>
					</div>
				</div>

				<div className="row" >
					<div className="col-6 col-lg-6 hidden move-up">
							<img
								className={"img-fluid profile" + this.props.fadeIn}
								src={Shreyas}
								alt=""
								style={{
									borderRadius: 50 + "%",
									height: 250 + "px",
									width: 250 + "px",
								}}
							/>
							<h4>Shreyas Byndoor</h4>
							<h5>Corporate Director</h5>
						</div>
						<div className="col-6 col-lg-6 hidden move-up">
								<img
									className={"img-fluid profile" + this.props.fadeIn}
									src={Rishab}
									alt=""
									style={{
										borderRadius: 50 + "%",
										height: 250 + "px",
										width: 250 + "px"
									}}
								/>
								<h4>Rishab Sriramoju</h4>
								<h5>Corporate Director</h5>
						</div>
				</div>

				<div className="row" >
					<div className="col-6 col-lg-6 hidden move-up">
							<img
								className={"img-fluid profile" + this.props.fadeIn}
								src={Neil}
								alt=""
								style={{
									borderRadius: 50 + "%",
									height: 250 + "px",
									width: 250 + "px",
								}}
							/>
							<h4>Neil Stimpson</h4>
							<h5>Competitions Director</h5>
						</div>
						<div className="col-6 col-lg-6 hidden move-up">
								<img
									className={"img-fluid profile" + this.props.fadeIn}
									src={Daksh}
									alt=""
									style={{
										borderRadius: 50 + "%",
										height: 250 + "px",
										width: 400 + "px"
									}}
								/>
								<h4>Daksh Varshney</h4>
								<h5>Competitions Director</h5>
							</div>
						</div>

						<div className="row">
							<div className="col-6 col-lg-6 hidden move-up">
									<img
										className={"img-fluid profile" + this.props.fadeIn}
										src={Kelly}
										alt=""
										style={{
											borderRadius: 50 + "%",
											height: 250 + "px",
											width: 250 + "px",
										}}
									/>
									<h4>Kelly Dunleavy</h4>
									<h5>Women in Tech Director</h5>
								</div>
								<div className="col-6 col-lg-6 hidden move-up">
										<img
											className={"img-fluid profile" + this.props.fadeIn}
											src={Ribhav}
											alt=""
											style={{
												borderRadius: 50 + "%",
												height: 250 + "px",
												width: 250 + "px"
											}}
										/>
										<h4>Ribhav Jain</h4>
										<h5>Marketing Director</h5>
									</div>
						</div>

						<div className="row" >
							<div className="col-6 col-lg-6 hidden move-up">
									<img
										className={"img-fluid profile" + this.props.fadeIn}
										src={Shayna}
										alt=""
										style={{
											borderRadius: 50 + "%",
											height: 250 + "px",
											width: 250 + "px",
										}}
									/>
									<h4>Shayna Kapadia</h4>
									<h5>Media Director</h5>
								</div>
								<div className="col-6 col-lg-6 hidden move-up">
										<img
											className={"img-fluid profile" + this.props.fadeIn}
											src={Cary}
											alt=""
											style={{
												borderRadius: 50 + "%",
												height: 250 + "px",
												width: 400 + "px"
											}}
										/>
										<h4>Cary Chai</h4>
										<h5>Design Director</h5>
								</div>
						</div>

						<div className="row" >
							<div className="col-6 col-lg-6 hidden move-up">
									<img
										className={"img-fluid profile" + this.props.fadeIn}
										src={Rishi}
										alt=""
										style={{
											borderRadius: 50 + "%",
											height: 250 + "px",
											width: 250 + "px",
										}}
									/>
									<h4>Rishi Kalluri</h4>
									<h5>Website Director</h5>
								</div>
								<div className="col-6 col-lg-6 hidden move-up">
										<img
											className={"img-fluid profile" + this.props.fadeIn}
											src={Fawaz}
											alt=""
											style={{
												borderRadius: 50 + "%",
												height: 250 + "px",
												width: 250 + "px"
											}}
										/>
										<h4>Fawaz Tirmizi</h4>
										<h5>Secretary/Treasurer</h5>
								</div>
						</div>

						<div className="row" >
							<div className="col-6 col-lg-6 hidden move-up">
									<img
										className={"img-fluid profile" + this.props.fadeIn}
										src={Manas}
										alt=""
										style={{
											borderRadius: 50 + "%",
											height: 250 + "px",
											width: 250 + "px",
										}}
									/>
									<h4>Manas Biju</h4>
									<h5>High School Director</h5>
								</div>
								<div className="col-6 col-lg-6 hidden move-up">
										<img
											className={"img-fluid profile" + this.props.fadeIn}
											src={Joey}
											alt=""
											style={{
												height: 250 + "px",
												width: 400 + "px"
											}}
										/>
										<h4>Joey Bahary</h4>
										<h5>Projects Director</h5>
								</div>
						</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
