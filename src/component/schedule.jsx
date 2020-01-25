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
							<VerticalTimeline layout="'1-column'">
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    contentStyle={{ background: 'rgb(89, 0, 179)', color: '#fff' }}
							    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
							    date="Sat. All Day"
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">High School Day</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB</h6>
							    <p>
										Expose high school students to cutting edge technology
							    </p>
							  </VerticalTimelineElement>
							  <VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Mon. 4 p.m. - 6 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Corporate Lightning Talks</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 1015</h6>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    contentStyle={{ background: 'rgb(89, 0, 179)', color: '#fff' }}
							    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
							    date="Mon. 7 p.m. - 8 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Hardware Interview Prep Workshop</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 1015</h6>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Tues. 11 a.m. - 1 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Networking Luncheon</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 3002</h6>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    contentStyle={{ background: 'rgb(89, 0, 179)', color: '#fff' }}
							    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
							    date="Tues. 2 p.m. - 3 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Lean In</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 3002</h6>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    date="Tues. 3:30 p.m. - 5 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Lightning Talks</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 1015</h6>
							  </VerticalTimelineElement>
								<VerticalTimelineElement
							    className="vertical-timeline-element--work"
							    contentStyle={{ background: 'rgb(89, 0, 179)', color: '#fff' }}
							    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
							    date="Tues. 5:30 p.m. - 7 p.m."
							    iconStyle={{ background: '#fd901c', color: '#fff' }}
							  >
							    <h3 className="vertical-timeline-element-title">Keynote</h3>
							    <h6 className="vertical-timeline-element-subtitle">ECEB 3002</h6>
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
