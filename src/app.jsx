import React from 'react'


import { One } from "./slides/one.jsx";

class Presentation extends React.Component {
	componentDidMount() {
	    window.addEventListener('keydown', (e) => {
	    	if (e.keyCode == 39) {
	    		console.log("go to next");
	    	}
	    	if (e.keyCode == 37) { 
	    		console.log("go to previous");
	    	}
	    });
	}

	componentWillUnmount () {
	    window.removeEventListener('keydown');
	}

	render() {
		return 	<div>
					<div> 
						<Link to="/"> Home </Link>
						<Link to="/one"> Go to one </Link>
					</div>
					<div> 
					{
						this.props.children
					}
					</div>
				</div>
	}
}



document.addEventListener("DOMContentLoaded", function(event) { 
  React.render((
  	  <Router>
  	    <Route path="/" component={Presentation}>
  	      <Route path="one" component={One}/>
  	    </Route>
  	  </Router>
  	), document.body)	
});



