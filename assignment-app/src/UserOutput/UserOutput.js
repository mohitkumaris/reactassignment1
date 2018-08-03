import React from "react"

const useroutput=(props)=>{
  return(
    <div>
      <p>This is first Paragraph, UserName is {props.username}</p>
      <p>This is second Paragraph,UserName is {props.username}</p>
    </div>
  )


};


export default useroutput;