import React from 'react/react'
import Heading from './heading.jsx'
import { Panel } from 'react-bootstrap';

class ImageSlide extends React.Component  {
  render() {

    let divStyle = {
      margin: "auto",
      width: "90%",
      height: "80%",
    }

    let boxesStyle = {
      margin:"auto",
      width:"100%",
      textAlign: "center",
    }
  	
    return  <div>
              <Heading title={this.props.heading} />
              <div style={divStyle}>
                <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
                  
                  <div style={boxesStyle}>
                    <Panel> 
                      <img src={this.props.path} />
                    </Panel>
                  </div>

                </div>
              </div>
            </div>
  }
}

export default ImageSlide;