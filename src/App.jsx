import { useState } from 'react'
import './App.scss'
import open from "./assets/eye-on.svg"
import closed from "./assets/eye-off.svg"


function App() {
  const [password,setPassword] = useState('')
  const [passwordIsVisible,setPasswordIsVisible] = useState(false)
  const passwordHasValidLenght = password.length>=8;
  const passwordHaslowerCaseLetter = /[a-z]/.test(password)
  const passwordHasUpperCaseLetter = /[A-Z]/.test(password)
  const passwordHasNumber = /[0-9]/.test(password)
  const passwordHasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;"<>,.?~\\-]/.test(password)
  return (
    <>
      <h1 className=''>Password Validation {passwordHaslowerCaseLetter.toString()} </h1>
      <input type={passwordIsVisible ? 'text' : 'password'} 
      onChange={(e)=>setPassword(e.currentTarget.value)} 
      name="password" id="" 
      placeholder='Entrer votre mot de passe ' 
      />
      <span type="button" onClick={()=>setPasswordIsVisible((prevState)=>!prevState)} >
        <img src={passwordIsVisible ? closed : open } alt={passwordIsVisible ? 'Oeil Fermer' : "Oeil Ouvert" } width={32} />
      </span>
      <ul>
        <li style={{color: passwordHaslowerCaseLetter ? 'green' :'red',fontWeight:passwordHaslowerCaseLetter ? 'bold' :''}}>Une Lettre en Minuscule</li>
        <li style={{color: passwordHasUpperCaseLetter ? 'green' :'red',fontWeight:passwordHasUpperCaseLetter ? 'bold' :''}} >Une Lettre en Majuscule</li>
        <li style={{color: passwordHasSpecialCharacter ? 'green' :'red',fontWeight:passwordHasSpecialCharacter ? 'bold' :''}}>Un Caractère Spéciale </li>
        <li style={{color: passwordHasNumber ? 'green' :'red',fontWeight:passwordHasNumber ? 'bold' :''}}>Un Chiffre </li>
        <li style={{color: passwordHasValidLenght ? 'green' :'red',fontWeight:passwordHasValidLenght ? 'bold' :''}}>Minimum 8 Caractères</li>
      </ul>
    </>
  )
}

export default App
