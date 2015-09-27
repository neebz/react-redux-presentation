import React from 'react/react'
import Heading from './heading.jsx'
import { Button } from 'react-bootstrap';
import Highlight from 'react-highlight';

class Zero extends React.Component  {
  render() {

    let divStyle = {
      margin: "auto",
      width: "90%",
      height: "80%",
      // backgroundColor: "white"
    }

    let boxesStyle = {
      margin:"10px",
      width:"50%",
      textAlign: "center",
      verticalAlign: "middle",
      height:"90%",
      // backgroundColor: "red",
    }

    let contentStyle = {
      margin: "auto",
      fontSize:"50px",
      textAlign: "left",
      width: "90%"
    }


    // let codeSample = "$('button').on('click', \n function () { \n $.get('/emails', function(emails) { \n // do your stuff \n }) \n })";
    let codeSample = require("raw!../samples/click-handler.txt");

  	
    return  <div>
              <Heading title="Welcome" />
              <div style={divStyle}>
                <div style={{display:"flex"}}>
                  
                  <div style={boxesStyle}>
                    <div style={{display:"flex", flexDirection: "column", width:"100%", height:"100%"}}>
                      <div style={contentStyle}>
                        <Button bsStyle="primary">Get Emails</Button>
                      </div>
                    </div>
                  </div>

                  <div style={boxesStyle}>
                    <div style={{display:"flex", flexDirection: "column", width:"100%", height:"100%"}}>
                      <div style={contentStyle}>
                        <Highlight className="javascript"> 
                          {codeSample}
                        </Highlight>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
  }
}

export default Zero;