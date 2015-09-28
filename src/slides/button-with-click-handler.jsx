import React from 'react/react'
import Heading from './heading.jsx'
import { Panel, Button } from 'react-bootstrap';
import Highlight from 'react-highlight';

class ButtonWithClickHandler extends React.Component  {
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
      fontSize:"20px",
      textAlign: "left",
      width: "90%"
    }


    let codeSample = require("raw!../samples/click-handler.txt");

  	
    return  <div>
              <Heading title="Plain ole' jQuery" />
              <div style={divStyle}>
                <div style={{display:"flex"}}>
                  
                  <div style={boxesStyle}>
                    <div style={{display:"flex", flexDirection: "column", width:"100%", height:"100%"}}>
                      <div style={contentStyle}>
                        <Panel> <Button bsStyle="primary" style={{fontSize: "25px"}}>Fetch Me Some Emails</Button> </Panel>
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

export default ButtonWithClickHandler;