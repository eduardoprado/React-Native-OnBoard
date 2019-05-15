

export default function validation(type:string, text:string){
  const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/
  const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}|1111$/
  const NAME_REGEX = /^[A-Za-z ]+$/
  const CPF_REGEX = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/
  const BIRTHDATE_REGEX = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
  const ROLE_REGEX = /^(admin)|(user)$/

  if (type=='name'){
    return NAME_REGEX.test(text) ? true: false
  }
  else if (type == 'email'){
    return EMAIL_REGEX.test(text) ? true: false
  }
  else if (type == 'cpf'){
    return CPF_REGEX.test(text) ? true: false
  }
  else if (type == 'birthDate'){
    return BIRTHDATE_REGEX.test(text) ? true: false
  }
  else if (type == 'password'){
    return PASSWORD_REGEX.test(text) ? true: false
  }
  else if (type == 'role'){
    return ROLE_REGEX.test(text) ? true: false
  }
  return true;
}
