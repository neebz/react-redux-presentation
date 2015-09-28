import React from 'react/react'
import Heading from './heading.jsx'

class StatementSlide extends React.Component  {
  render() {

    let divStyle = {
      margin: "auto",
      width: "90%",
      height: "80%",
    }

    let boxesStyle = {
      margin:"auto",
      width:"100%",
      display: "flex",
      backgroundColor: "white",
      padding: "5px",
      borderRadius: "5px",
      minHeight: "50%",
    }

    let markdownText = this.props.markdownText;
  	
    return  <div>
              <Heading title={this.props.heading} />
              <div style={divStyle}>
                <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
                  
                  <div style={boxesStyle}>
                      <div style={{ margin: "auto", fontSize: "70px", textAlign: "center" }}> {this.props.text} </div>
                  </div>

                </div>
              </div>
            </div>
  }
}

export default StatementSlide;