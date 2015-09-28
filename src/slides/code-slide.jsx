import React from 'react/react'
import Heading from './heading.jsx'
import Highlight from 'react-highlight';

class CodeSlide extends React.Component  {
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
    }

    // let path = "raw!" + this.props.codeSamplePath;
    // let codeSample = require(path);

    let codeSample = this.props.codeSample;
  	
    return  <div>
              <Heading title={this.props.heading} />
              <div style={divStyle}>
                <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
                  
                  <div style={boxesStyle}>
                      <Highlight className="javascript"> 
                        {codeSample}
                      </Highlight>
                  </div>

                </div>
              </div>
            </div>
  }
}

export default CodeSlide;