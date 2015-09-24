import React from 'react/react'
import { Router, Route, Link} from 'react-router'


import { One } from "./slides/one.jsx";

class Presentation extends React.Component {
	render() {
		return 	<div>
					<div> Hi </div>
					<Link to="/"> Home </Link>
					<Link to="/one"> Go to one </Link>
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



