import { useState } from 'react'
import PasswordValidator from "./inc/PasswordValidator"
import './App.scss'
import open from "./assets/eye-on.svg"
import closed from "./assets/eye-off.svg"




function App() {
  const [password, setPassword] = useState('')
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)
  const validator = new PasswordValidator(password);
  return (
    <>
      <h1 className=''>Password Validation </h1>
      <input type={passwordIsVisible ? 'text' : 'password'}
        onChange={(e) => setPassword(e.currentTarget.value)}
        name="password" id=""
        placeholder='Entrer votre mot de passe '
      />
      <span type="button" onClick={() => setPasswordIsVisible((prevState) => !prevState)} >
        <img src={passwordIsVisible ? closed : open} alt={passwordIsVisible ? 'Oeil Fermer' : "Oeil Ouvert"} width={32} />
      </span>
      <ul>
        <li style={{ color: validator.haslowerCaseLetter() ? 'green' : 'red', fontWeight: validator.haslowerCaseLetter() ? 'bold' : '' }}>Une Lettre en Minuscule</li>
        <li style={{ color: validator.hasUpperCaseLetter() ? 'green' : 'red', fontWeight: validator.hasUpperCaseLetter() ? 'bold' : '' }} >Une Lettre en Majuscule</li>
        <li style={{ color: validator.hasSpecialCharacter() ? 'green' : 'red', fontWeight: validator.hasSpecialCharacter() ? 'bold' : '' }}>Un Caractère Spéciale </li>
        <li style={{ color: validator.hasDigit() ? 'green' : 'red', fontWeight: validator.hasDigit() ? 'bold' : '' }}>Un Chiffre </li>
        <li style={{ color: validator.hasValidLenght() ? 'green' : 'red', fontWeight: validator.hasValidLenght() ? 'bold' : '' }}>Minimum 8 Caractères</li>
      </ul>
    </>
  )
}

export default App
