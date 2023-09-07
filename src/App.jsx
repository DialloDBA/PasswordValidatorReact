import { useState } from 'react'
import './App.scss'


function App() {
  const [passwordIsVisible,setPasswordIsVisible] = useState(false)
  return (
    <>
      <h1 className=''>Password Validation {passwordIsVisible.toString()} </h1>
      <input type={passwordIsVisible ? 'text' : 'password'} name="password" id="" placeholder='Entrer votre mot de passe ' />
      <button type="button" onClick={()=>setPasswordIsVisible((prevState)=>!prevState)}>{passwordIsVisible ? 'Masquer' : 'Afficher'}</button>
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
