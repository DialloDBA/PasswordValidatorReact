import { useState } from 'react'
import './App.scss'
import open from "./assets/eye-on.svg"
import closed from "./assets/eye-off.svg"


function App() {
  const [passwordIsVisible,setPasswordIsVisible] = useState(false)
  return (
    <>
      <h1 className=''>Password Validation {passwordIsVisible.toString()} </h1>
      <input type={passwordIsVisible ? 'text' : 'password'} name="password" id="" placeholder='Entrer votre mot de passe ' />
      <span type="button" onClick={()=>setPasswordIsVisible((prevState)=>!prevState)} >
        <img src={passwordIsVisible ? closed : open } alt={passwordIsVisible ? 'Oeil Fermer' : "Oeil Ouvert" } width={32} />
        </span>
      <ul>
        <li>Une Lettre en Minuscule</li>
        <li>Une Lettre en Majuscule</li>
        <li>Un Caractère Spéciale </li>
        <li>Un Chiffre </li>
        <li>Minimum 8 Caractères</li>
      </ul>
    </>
  )
}

export default App
