import React from 'react/react'
import Heading from './heading.jsx'
import { Panel, Table } from 'react-bootstrap';

class ComponentDrivenUI extends React.Component  {
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

    const tableInstance = (
      <Table striped bordered condensed hover style={{fontSize: "75px"}}>
        <thead>
          <tr>
            <th>Library</th>
            <th>Term</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Backbone</td>
            <td>Views</td>
          </tr>
          <tr>
            <td>Angular</td>
            <td>Directives</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Components</td>
          </tr>
          <tr>
            <td>Polymer</td>
            <td>Web Components</td>
          </tr>
        </tbody>
      </Table>
    );

  	
    return  <div>
              <Heading title="Component Driven UI" />
              <div style={divStyle}>
                <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
                  
                  <div style={boxesStyle}>
                    <Panel> 
                      {tableInstance}
                    </Panel>
                  </div>

                </div>
              </div>
            </div>
  }
}

export default ComponentDrivenUI;