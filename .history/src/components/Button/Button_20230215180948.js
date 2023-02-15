import React ,{useState} from 'react'
import Layout from '../Layout/Layout'
import './Button.css'
function Button() {
    const [isClicked,setIsClicked] = useState(<Layout/>)

    const handleClick =(){
        setI
    }
  return (
  <div class="button">
    <button>Confirm</button>
  </div>
  )
}

export default Button