import React from 'react/react'
import { connect } from 'react-redux';

import slides from "./slides/index.jsx";

class Presentation extends React.Component {
	componentDidMount() {
	    window.addEventListener('keydown', this.keyDownEvent.bind(this));
	}

	componentWillUnmount () {
	    window.removeEventListener('keydown', this.keyDownEvent.bind(this));
	}

	keyDownEvent(e) {
		const { dispatch } = this.props;
		if (e.keyCode == 39) {
			dispatch({ type: 'NEXT_SLIDE' });
		}
		if (e.keyCode == 37) { 
			dispatch({ type: 'PREVIOUS_SLIDE' });
		}
	}

	getCurrentSlide () {
		return slides[this.props.currentSlide];
	}

	render() {
		const { dispatch, currentSlide } = this.props;
		let CurrentSlide = this.getCurrentSlide();
		return 	<div>
					<div> 
						<div> Emerging Trends in Whatever </div>
					</div>
					<div> 
						<CurrentSlide />
					</div>
				</div>
	}
}

const select = (state) => {
	return { currentSlide: state };
}
export default connect(select)(Presentation);