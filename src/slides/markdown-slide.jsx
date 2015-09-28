import React from 'react/react'
import Heading from './heading.jsx'
import Markdown from 'react-remarkable'

class MarkdownSlide extends React.Component  {
  render() {

    let divStyle = {
      margin: "auto",
      width: "90%",
      height: "80%",
    }

    let boxesStyle = {
      margin:"auto",
      width:"100%",
      textAlign: "left",
      backgroundColor: "white",
      padding: "5px",
      borderRadius: "5px",
      minHeight: "50%",
      fontSize: "50px"
    }

    let markdownText = this.props.markdownText;
  	
    return  <div>
              <Heading title={this.props.heading} />
              <div style={divStyle}>
                <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
                  
                  <div style={boxesStyle}>
                      <Markdown source={this.props.text} /> 
                  </div>

                </div>
              </div>
            </div>
  }
}

export default MarkdownSlide;