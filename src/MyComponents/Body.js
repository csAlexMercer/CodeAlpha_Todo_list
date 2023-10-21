import React from 'react'
import styled from 'styled-components'
import BodyItem from './BodyItem'
export default function Body(props) {
  let mystyle={
        minHeight:"80vh",
        margin:"100px"
  }
  return (
    
    <div className="container" style={mystyle}>
      <CardContainer>
      <h4 className=" my-3">Current Lists:</h4>
      {props.list.length===0? "No List To Display":
           props.list.map((todo)=>{
        return (<BodyItem todo={todo} key={todo.title} onDel={props.onDel}/>)
       
             })
             }
      
      </CardContainer>
    </div>
  )
}
const CardContainer = styled.div`
{
 
  
  margin-left: 1px;
  
}  
`
