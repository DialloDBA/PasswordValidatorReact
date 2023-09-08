import { useState } from 'react'
import PasswordValidator from "./inc/PasswordValidator"
import './App.scss'
import open from "./assets/eye-on.svg"
import closed from "./assets/eye-off.svg"
import PasswordValidatorStatusViewer from './components/PasswordValidatorStatusViewer'




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
      <PasswordValidatorStatusViewer validator={validator}/>
    </>
  )
}

export default App
