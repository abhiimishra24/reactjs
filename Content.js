import React from 'react';



class Content extends React.Component{
  constructor(){
    super();
    this.state={
      states:null
    }

  }
  componentDidMount(){
    fetch('https://api.covidtracking.com/v1/states/current.json').then((resp)=>{
      resp.json().then((result)=>{
        //console.warn(result)
        this.setState({states:result})
      })
    })
  }
  render(){
    return(
<div className="App">
<h1>
Covid Tracking Details
  </h1>
  <table border="2px solid black">
  <tr>
  <td>ID</td>
    <td> Date</td>
    <td> state</td>
    <td> Positive</td>
    <td> ProbableCases</td>
    <td> Negative</td>
    <td> Pending</td>
    <td>totalTestResultSource</td>
  </tr>
  {
    this.state.states?
    this.state.states.map((item,i)=>
  
    
 

   <tr>
   <td> {i}</td>
  
   <td>  {item.date}</td>
   <td>{item.state}</td>
   <td>{item.positive}</td>
   <td>{item.probableCases}</td>
   <td>{item.negative}</td>
   <td>{item.pending}</td>
   <td>{item.totalTestResults}</td>
  </tr>

  
  )
    :
    null
  }
  </table>
  </div>
  
    );
  }
}

   





 

    
  



export default Content;
