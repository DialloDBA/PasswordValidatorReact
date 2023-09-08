import React from 'react'

export default function PasswordValidatorStatusViewer({validator}) {
    
  return (
    <ul>
        <li style={{ color: validator.haslowerCaseLetter() ? 'green' : 'red', fontWeight: validator.haslowerCaseLetter() ? 'bold' : '' }}>Une Lettre en Minuscule</li>
        <li style={{ color: validator.hasUpperCaseLetter() ? 'green' : 'red', fontWeight: validator.hasUpperCaseLetter() ? 'bold' : '' }} >Une Lettre en Majuscule</li>
        <li style={{ color: validator.hasSpecialCharacter() ? 'green' : 'red', fontWeight: validator.hasSpecialCharacter() ? 'bold' : '' }}>Un Caractère Spéciale </li>
        <li style={{ color: validator.hasDigit() ? 'green' : 'red', fontWeight: validator.hasDigit() ? 'bold' : '' }}>Un Chiffre </li>
        <li style={{ color: validator.hasValidLenght() ? 'green' : 'red', fontWeight: validator.hasValidLenght() ? 'bold' : '' }}>Minimum 8 Caractères</li>
      </ul>
  )
}
