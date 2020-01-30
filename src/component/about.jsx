import React from "react";
import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/pen.png";
import browser from "../img/browser.png";
import myImage from "../img/myImage.png";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">

				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>

				What is Reflections | Projections?
Reflections | Projections is an annual technology conference held at the University of Illinois at Urbana-Champaign. Inviting premier speakers, influencers, and companies, it features a puzzle competition, speaker events, and a 24-hour AI hackathon. Reflections | Projections is coming on its 25th anniversary this year, upholding its standards of excellence.

Our Team
We are students passionate about technology who embody the diversity and excellence inherent at the University of Illinois at Urbana-Champaign. We bring industry and academia into one conference to incite the spread of novel ideas. We connect students with professional opportunities. We host a one of a kind AI hackathon. And, we can't wait for you to come to R|P 2019!
<div className="row" style={{ marginTop: 7 + "rem" }}>

		<div className="col-6 col-lg-6 hidden">
				<img
					className={"img-fluid " + this.props.fadeIn}
					src={myImage}
					alt=""
					style={{
						borderRadius: 50 + "%",
						height: 250 + "px",
						width: 250 + "px"
					}}
				/>
				<h4>Abishek Venkit</h4>
				<h5>Director</h5>
				<p className={"mytext pt-1 " + this.props.fadeIn}>
					I love to transform ideas into reality using code. I
					am passionate about using Javascript and animations
					to create awesome user experiences.
				</p>
			</div>
			<div className="col-6 col-lg-6 hidden">
					<img
						className={"img-fluid " + this.props.fadeIn}
						src={myImage}
						alt=""
						style={{
							borderRadius: 50 + "%",
							height: 250 + "px",
							width: 250 + "px"
						}}
					/>
					<h4>Abishek Venkit</h4>
					<h5>Director</h5>
					<p className={"mytext pt-1 " + this.props.fadeIn}>
						I love to transform ideas into reality using code. I
						am passionate about using Javascript and animations
						to create awesome user experiences.
					</p>
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
