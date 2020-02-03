import React from "react";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

import {TiSocialFacebookCircular, TiSocialGithubCircular} from "react-icons/ti";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="px-3"
								href="https://github.com/ecepulse"
								target="_blank"
								rel="noopener noreferrer">
								<TiSocialGithubCircular size="3em"/>
							</a>
							<a
								href="https://www.facebook.com/ECEPulse/"
								target="_blank"
								rel="noopener noreferrer">
								<TiSocialFacebookCircular size="3em"/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">ECE Pulse &copy; 2020</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
