import React from 'react/react'
import Heading from './heading.jsx'
import Highlight from 'react-highlight';

class UnReadCountCode extends React.Component  {
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

    let codeSample = require("raw!../samples/click-handler-with-unread-count.txt");
  	
    return  <div>
              <Heading title="Plain ole' jQuery" />
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

export default UnReadCountCode;