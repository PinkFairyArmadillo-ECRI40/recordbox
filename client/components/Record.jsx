import React, { useState } from "react";



export default function Record({ website, userName, password}){
  const [hidden, setHidden] = useState(true);

  const handleToggle = () => {
    setHidden(!hidden);
  }
  return (
    <div className="eachRecord">
      <div id="website" className="eachRecordHeader">
        <div>Website:</div>
        <div>{website}</div>
      </div>
      <div className="eachRecordHeader">
        <button onClick={handleToggle} id="toggle">Username:</button>
        <input type={hidden ? "password" : "text"} value={userName} id="password"/>
      </div>
      <div className="eachRecordHeader">
        <button onClick={handleToggle} id="toggle">Password:</button>
        <input type={hidden ? "password" : "text"} value={password} id="password"/>
      </div>
    </div>
  )
}







