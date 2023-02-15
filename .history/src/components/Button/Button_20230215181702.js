import React ,{useState} from 'react'
import Compelete from '../Add/Compelete'
import Layout from '../Layout/Layout'
import './Button.css'
function Button() {
 
  return (
  <div class="button">
    <button onClick={handleClick}>Confirm</button>
  </div>
  )
}

export default Button