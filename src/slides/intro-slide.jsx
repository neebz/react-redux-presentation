import React from 'react/react'
import Heading from './heading.jsx'

class Intro extends React.Component  {
  render() {

    let divStyle = {
      margin: "auto",
      width: "90%",
      height: "100%",
    }

    let boxesStyle = {
      margin:"auto",
      width:"100%",
      display: "flex",
      backgroundColor: "white",
      padding: "5px",
      borderRadius: "5px",
      minHeight: "100%%",
    }

    let subText = {
      fontSize:"40px", color: "#409262", fontWeight: "bold", textShadow: "0 0 0"
    }

    let markdownText = this.props.markdownText;
  	
    return  <div>
              <div style={divStyle}>
                <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
                  
                  <div style={boxesStyle}>
                      <div style={{ margin: "auto", fontSize: "100px", textAlign: "center", textShadow: "1px 1px 1px" }}> 
                        <div style={{fontVariant: "small-caps", marginTop:"50px"}}>Emerging Trends in Client-side Javascript Frameworks</div> <br/>
                        <div style={{fontSize: "35px", margin:"50 10 20 20", textAlign: "right"}}>
                          <span style={subText}> Muneeb Khawaja </span> <br />
                          <span style={{fontSize:"30px", color: "#414345", fontWeight: "bold", textShadow: "0 0 0"}}> VP Engineering - CareAxiom </span> 
                          <br />
                          <span style={{fontSize:"27px", color: "#414345", marginRight:"10px"}}> @neebz </span>
                        </div>
                      </div>
                  </div>

                </div>
              </div>
            </div>
  }
}

export default Intro;