import React from 'react'
export default function BodyItem({todo,onDel}) {
  return (
    <>
    <div >
      <h4 className="text-left">{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger"style={{ borderRadius: "17px" }} onClick={()=>{onDel(todo)}}>Del</button>
    </div>
    <hr/>
    </>
  )
}
