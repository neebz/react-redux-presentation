import React from 'react/react'

class Heading extends React.Component  {
  render() {
  	let divStyle = {
  		"backgroundColor": "whitesmoke",
  		"marginTop":"20px",
  		"marginBottom":"10px",
  		"marginLeft":"auto",
  		"marginRight":"auto",
  		"height": "100px",
  		"lineHeight": "100px",
  		"textAlign": "center",
  		"width":"90%",
  		"color": "black",
      "borderRadius": "5px",
      "textShadow": "1px 1px 0px",
      "fontSize": "75px", 
  	}
    return  <div style={divStyle}> {this.props.title} </div>;
  }
}

export default Heading;