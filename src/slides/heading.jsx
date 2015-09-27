import React from 'react/react'

class Heading extends React.Component  {
  render() {
  	let divStyle = {
  		"backgroundColor": "whitesmoke",
  		"marginTop":"10px",
  		"marginBottom":"10px",
  		"marginLeft":"auto",
  		"marginRight":"auto",
  		"height": "50px",
  		"lineHeight": "50px",
  		"textAlign": "center",
  		"width":"90%",
  		"color": "black",
      "fontFamily": "Verdana",
      "fontSize": "20px", 
  	}
    return  <div style={divStyle}> {this.props.title} </div>;
  }
}

export default Heading;