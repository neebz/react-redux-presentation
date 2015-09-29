import React from 'react/react'
import Heading from './heading.jsx'
import { Panel, Button, Tabs, Tab, Table } from 'react-bootstrap';

class UIExample extends React.Component  {
  render() {

    let divStyle = {
      margin: "auto",
      width: "90%",
      height: "80%",
    }

    let boxesStyle = {
      margin:"auto",
      width:"50%",
      textAlign: "left",
    }

    const tableInstance = (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{backgroundColor: "#E2E1F1", fontWeight: "bold"}}>
            <td>1</td>
            <td>Rehan</td>
            <td>Plans for weekend</td>
            <td>10 minutes ago</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Salma</td>
            <td>Nigerian prince have died. You are his heir.</td>
            <td>Today</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tahir</td>
            <td>Lorem Ipsum shipsum</td>
            <td>Saturday</td>
          </tr>
        </tbody>
      </Table>
    );

    const tabsInstance = (
      <Tabs defaultActiveKey={1}>
        <Tab eventKey={1} title="Emails (1)">
          <Panel> {tableInstance} </Panel>
        </Tab>
      </Tabs>
    );

  	
    return  <div>
              <Heading title="Our inbox" />
              <div style={divStyle}>
                <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
                  
                  <div style={boxesStyle}>
                    <Panel> 
                      {tabsInstance}
                      <Button bsStyle="primary" style={{fontSize: "25px"}}>Fetch Me Some Emails</Button> 
                    </Panel>
                  </div>

                </div>
              </div>
            </div>
  }
}

export default UIExample;