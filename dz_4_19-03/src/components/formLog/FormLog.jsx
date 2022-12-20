import React, { useState } from 'react'


function FormLog() {
    const [log,setLog]= useState(true)
    console.log(log);
  return (
    <div className='former'>
         <h1> заполните форму!</h1>
        <h1><input  disabled={!log} type="text" name="name" id=""  placeholder='name'/></h1>
        <h1><input disabled={!log} type="number" name="number" id="" placeholder='phone'/></h1>
        <h1><input  disabled = {!log} type="text" name="surname" id="" placeholder='surname'/></h1>
        <label className='label' htmlFor="check">
                   <h2> Согласен(-сна) с условиями </h2>
            <input type="checkbox" onChange={()=>setLog(!log)} name="check" id="check" />
        </label>
        <button disabled={log}>SEND</button>

    </div>
  )
}

export default FormLog