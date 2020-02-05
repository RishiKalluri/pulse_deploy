import React from "react";
import Vmarine from "../img/Vmarine.jpg";
import aguaDeLuz from "../img/aguaDeLuz.png";
import todo from "../img/todolist.png";
import PropTypes from "prop-types";
import "./projects.css"

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center black-text" + this.props.fadeInRight}>
							Events
						</h1>
						<div className="row my-5">
							<div
								className={
									"keynotebg col-12 col-sm-12 col-md-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Keynote</h2>
										<h5>Feb. 5: 5 p.m. - 7 p.m.</h5>
									</div>
								</div>
							</div>
							<div
								className={
									"witbg col-12 col-sm-12 col-md-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Women in Tech Day</h2>
										<h5>Feb. 4: All Day</h5>
									</div>
								</div>
							</div>
							<div
								className={
									"hsbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>High School Day</h2>
										<h5>Feb. 1: All Day</h5>
									</div>
								</div>
							</div>
							<div
								className={
									"hwbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Hardware Competition</h2>
										<h5>Feb. 9: 9 a.m. - 9 p.m.</h5>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"vmarine"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"swbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Software Competition</h2>
										<h5>Feb. 8: 6 p.m. - 8 p.m.</h5>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vmarine" className="modal-card"  style={{color: "white"}}>
						<div className="modal-info">
							<h2>Prizes:</h2>
							<div className="modal-description">
								<ul>
									<li>
										1st Place: Nintendo Switch (x5)
									</li>
									<li>
										2nd Place: Oculus Go (x5)
									</li>
									<li>
										3rd Place: Bose SoundSport Wireless Headphones (x5)
									</li>
								</ul>
								<a href="https://docs.google.com/forms/d/e/1FAIpQLSfIvYzVeSCro5vf03Rg__0Sqoku33_ZZMI_TCWdhiqk5i9z_Q/viewform">
								<button
									className={"work-button"}
									data-wow-offset="0"
									>
									Register
								</button>
								</a>
							</div>
							<div className="modal-bottom">
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={aguaDeLuz} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Agua De Luz</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype website to promote health
										natural-made products to increase brand
										and online presence.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Webpack, Parallax Effect,
										SmoothScrolling(UI), and VanillaJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="./AguaDeLuz/index.html"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card" style={{color: "white"}}>
						<div className="modal-info">
							<h2>Prizes:</h2>
							<div className="modal-description">
							<h3>Beginner:</h3>
								<ul>
									<li>
										1st Place: VANKYO Leisure 3 Mini Projector
									</li>
									<li>
										2nd Place: Logitech G502 Gaming Mouse
									</li>
									<li>
										3rd Place: Google Home Mini
									</li>
								</ul>
							<h3>Advanced:</h3>
								<ul>
									<li>
										 1st Place: Samsung FHD 27" Curved Monitor
									</li>
									<li>
										2nd Place: Logitech G Pro X Mechanical Keyboard
									</li>
									<li>
										3rd Place: UE Boom 2 Speaker
									</li>
								</ul>
							<h3>No Prior Registration Required. Sign-up at the event!</h3>
							</div>
							<div className="modal-bottom">
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
