import React from "react";
import Vmarine from "../img/Vmarine.jpg";
import aguaDeLuz from "../img/aguaDeLuz.png";
import todo from "../img/todolist.png";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./schedule.css"

import PropTypes from "prop-types";

export default class Schedule extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-schedule" className="container-fluid schedule-background">
					<div className=" project-container container pb-5">
						<h1
							id="projects"
							className={"text-center white-text" + this.props.fadeInRight}
							>
							Schedule
						</h1>
						<div className="row my-5">
							<VerticalTimeline layout="'2-column'">
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Saturday, February 1st. 9 a.m. - 5 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">High School Day</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 3002</h6>
							    <p>
										Exposing high school students to cutting edge technology through student-run workshops and campus tours.
							    </p>
							  </VerticalTimelineElement>
							  <VerticalTimelineElement
								className="vertical-timeline-element--work"
							    date="Monday, February 3rd. 4 p.m. - 6 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Corporate Lightning Talks</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 1015</h6>
							    <h8 className="vertical-timeline-element-subtitle">Pizza + Boba</h8>

							    <p>
										Learn about the newest technologies and industry life from Hubspot and IMC engineers.
							    </p>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Monday, February 3rd. 7 p.m. - 8 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Hardware Interview Prep Workshop</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 1015</h6>
							    <h8 className="vertical-timeline-element-subtitle">Insomnia Cookies</h8>

							    <p>
										Learn the tips and tricks essential to passing any Hardware Interview!
							    </p>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
								className="vertical-timeline-element--work"
							    date="Tuesday, February 4th. 11 a.m. - 1 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Women in Tech Networking Luncheon</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 3002</h6>
							    <h8 className="vertical-timeline-element-subtitle">Panera Bread</h8>
							    <p>
									Meet prominent women in STEM from industry and academia, and network over lunch.
								</p>
								</VerticalTimelineElement>
								<VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Tuesday, February 4th. 1 p.m. - 3 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Hubspot Recruiting</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB Atrium</h6>
							    <p>
									Meet representatives from Hubspot!
								</p>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Tuesday, February 4th. 2 p.m. - 3 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Women in Tech Lean In</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 3002</h6>
							    <p>
									Lean in to discuss gender bias and how to properly combat issues in industry. All are welcome!
								</p>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
								className="vertical-timeline-element--work"
							    date="Tuesday, February 4th. 3:30 p.m. - 5 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Women in Tech Lightning Talks</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 1015</h6>
							    <h8 className="vertical-timeline-element-subtitle">Dunkin Donuts</h8>
								<p>
									Join us to hear from several incredible industry professionals and researchers who will share their stories and work.
								</p>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Tuesday, February 4th. 5:30 p.m. - 7 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Women in Tech Keynote</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 3002</h6>
							    <h8 className="vertical-timeline-element-subtitle">Noodles and Co.</h8>
								<p>
									Come listen to Shobana Radhakrishnan, Director of Engineering, Android TV at Google.
								</p>
							  </VerticalTimelineElement>
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Wednesday, February 5th. 12 p.m. - 2 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Texas Instruments Recruiting</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB Atrium</h6>
							    <p>
									Meet representatives from Texas Instruments!
								</p>
							  </VerticalTimelineElement>
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Wednesday, February. 5th 5 p.m. - 7 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Pulse Keynote Address</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 1002</h6>
							    <h8 className="vertical-timeline-element-subtitle">Manolo's</h8>
							    <p>
									Help us kick off a great conference, and hear from a technology leader!
								</p>
							  </VerticalTimelineElement>
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Thursday, February 6th. 4 p.m. - 5 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">How to get an Internship, by Research Park</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 2015</h6>
							    <h8 className="vertical-timeline-element-subtitle">Insomnia Cookies</h8>
							    <p>
									Help us kick off a great conference, and hear from a technology leader!
								</p>
							  </VerticalTimelineElement>
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Thursday, February 6th. 6 p.m. - 7:30 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Texas Instruments Sensor Board Workshop</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 2017</h6>
							    <p>
									Learn about TI's sensor board from an industry engineer!
								</p>
							  </VerticalTimelineElement>
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Thursday, February 6th. 7 p.m. - 9 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Future of Tech</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 2017</h6>
							    <h8 className="vertical-timeline-element-subtitle">Pizza</h8>

							    <p>
									Listen to professors and engineers at the cutting edge of their fields, and engage in an open panel discussion.
								</p>
							  </VerticalTimelineElement>
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Friday, February 7th. 6 p.m. - 8 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Software Competition</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 1002</h6>
							    <h8 className="vertical-timeline-element-subtitle">Pizza</h8>
							    <p>
									Test your knowledge of algorithms and coding, while competing against your peers, in this timed coding challenge.
								</p>
							  </VerticalTimelineElement>
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Saturday, February 8th. 9 a.m. - 9 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Hardware Competition</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 3002</h6>
							    <h8 className="vertical-timeline-element-subtitle">Einstein Bagels + Potbelly's + Manolo's</h8>
							    <p>
									Teams will compete to create the most creative projects that use sensors, microcontrollers, and more!
								</p>
							  </VerticalTimelineElement>
							</VerticalTimeline>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Schedule.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
