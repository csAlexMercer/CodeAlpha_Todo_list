import React, { useState } from 'react';

export default function AddForm({addList}) {
   
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc ){
            alert("Every box must be filled")
        }
        else{
        addList(title,desc);
        settitle("");
        setdesc("");
        }
    }

    return (
        <div className="container my-3">
            <h4>Add a List</h4>
            <form onSubmit={submit}>
          
                <div className="mb-3">
                <label htmlFor="List title" className="form-label" >Add a Title</label>

                    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Add a Description</label>
                    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                
                <button type="Submit" className="btn btn-sm btn-success" style={{ borderRadius: "7px" }}>Add list</button>
            </form>

        </div>
    )
}
