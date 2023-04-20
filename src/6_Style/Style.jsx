import React from 'react';
import Child from './Child';



// import css
import "./style.css";

//import css module
import styles from "./style.module.css";
console.log(styles.heading);


function Style() {
  return (
    <div>
      <h1>Style</h1>

      {/* Inline style */}
      <h1 style={{ backgroundColor: "red", color: "white" }}>Hello Reactjs</h1>

      {/* CSS */}
      <h1 className='heading'>Hello Bita</h1>
      <Child />

      {/* Module */}
      <h1 className={styles.heading}>Hello CSS Module</h1>
      

     
    </div>
  )
}

export default Style