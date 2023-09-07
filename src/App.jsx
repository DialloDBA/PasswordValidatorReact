import { useState } from 'react'
import './App.scss'

function App() {
  return (
    <div className=''>
      <h1 className=''>Password Validation</h1>
      <input type="password" name="password" id="" placeholder='Entrer votre mot de passe ' />
      <button type="button">Afficher/Masquer</button>
      <ul>
        <li>Une Lettre en Minuscule</li>
        <li>Une Lettre en Majuscule</li>
        <li>Un Caractère Spéciale </li>
        <li>Un Chiffre </li>
        <li>Minimum 8 Caractères</li>
      </ul>
    </div>
  )
}

export default App
