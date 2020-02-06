import React from "react";
import PropTypes from "prop-types";

import TI from "../img/companies/texasinstruments.png"
import IMC from "../img/companies/IMC Logo.png"
import ATT from "../img/companies/ATT-Black -Logo.png"
import Redfin from "../img/companies/redfin-logo-transparent.png"
import Res from "../img/companies/Research Park Logo.png"
import Hubspot from "../img/companies/hubspotlogo.svg"
import Google from "../img/companies/Google Logo.png"
import FB from "../img/companies/Facebook Logo.png"


export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container-fluid text-center mt-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					<br/>
					Sponsors
				</h1>
				<div className="row">
					<div className="col-3 col-lg-12 hidden move-up">
							<img
								className={"img-fluid profile" + this.props.fadeIn}
								src={TI}
								alt=""
								style={{
									height: 300 + "px",
									width: 500 + "px",
								}}
							/>
					</div>
				</div>
				<div className="row">
					<div className="col-6 col-lg-6 hidden move-up">
							<img
								className={"img-fluid profile" + this.props.fadeIn}
								src={ATT}
								alt=""
								style={{
									height: 125 + "px",
									width: 300 + "px",
								}}
							/>
					</div>
					<div className="col-6 col-lg-6 hidden move-up">
							<img
								className={"img-fluid profile" + this.props.fadeIn}
								src={IMC}
								alt=""
								style={{
									height: 125 + "px",
									width: 300 + "px",
								}}
							/>
					</div>
			</div>
			<br/>
			<div className="row">
				<div className="col-6 col-lg-6 hidden move-up">
						<img
							className={"img-fluid profile" + this.props.fadeIn}
							src={Redfin}
							alt=""
							style={{
								height: 125 + "px",
								width: 300 + "px",
							}}
						/>
				</div>
				<div className="col-6 col-lg-6 hidden move-up">
						<img
							className={"img-fluid profile" + this.props.fadeIn}
							src={Res}
							alt=""
							style={{
								height: 125 + "px",
								width: 300 + "px",
							}}
						/>
				</div>
		</div>
		<div className="row">
			<div className="col-6 col-lg-12 hidden move-up">
					<img
						className={"img-fluid profile" + this.props.fadeIn}
						src={Hubspot}
						alt=""
						style={{
							height: 125 + "px",
							width: 300 + "px",
						}}
					/>
			</div>
	</div>
	<div className="row">
		<div className="col-6 col-lg-6 hidden move-up">
				<img
					className={"img-fluid profile" + this.props.fadeIn}
					src={Google}
					alt=""
					style={{
						height: 125 + "px",
						width: 150 + "px",
					}}
				/>
		</div>
		<div className="col-6 col-lg-6 hidden move-up">
		<br/>
				<img
					className={"img-fluid profile" + this.props.fadeIn}
					src={FB}
					alt=""
					style={{
						height: 50 + "px",
						width: 200 + "px",
					}}
				/>
		</div>
</div>
			</div>

		);
	}
}
