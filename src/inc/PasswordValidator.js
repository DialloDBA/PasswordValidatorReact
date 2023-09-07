export default class PasswordValidator {
    constructor(password) {
      this.password = password;
    }
  
    hasValidLenght() {
      return this.password.length >= 8;
    }
  
    haslowerCaseLetter() {
      return /[a-z]/.test(this.password);
    }
  
    hasUpperCaseLetter() {
      return /[A-Z]/.test(this.password);
    }
  
    hasDigit() {
      return /[0-9]/.test(this.password);
    }
  
    hasSpecialCharacter() {
      return /[!@#$%^&*()_+{}\[\]:;"<>,.?~\\-]/.test(this.password)
    }
  
}
