import React from 'react'
import {ReactComponent as Add} from './icon-complete.svg'
import './Compelete.css'

function Compelete() {
  return (
    <div class="Complete">
      <div class="icon">
        <Add/>
      </div>
      <h1>T H A N K Y O U!</h1>
      <div class="para">
        <p>We've added your details</p>
      </div>
      <div class="button">
        <button>Continue</button>
      </div>
    </div>
  )
}

export default Compelete