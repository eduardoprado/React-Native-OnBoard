import { gql } from "apollo-boost";
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import validation from '../validation';
import { StyledTouchableOpacity, ButtonText, FormView, FormInput } from '../UXcomponents/style';
import Form from './Form'

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
}


export default class LoginForm extends Component<any, {
  email: string;
  password: string;
  emailValdate: boolean;
  passwordValidate: boolean;
  buttonPressed: boolean;
}>
{
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValdate: false,
      passwordValidate: false,
      buttonPressed: false
    }
  }
  validate = (event: any) => {
    let email = this.state.email
    let password = this.state.password
    const validemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/
    const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/

    if (!validemail.test(email)) {
      this.setState({
        emailValdate: false
      })
    }
    else if (validemail.test(email)) {
      this.setState({
        emailValdate: true
      })
    }
    if (!validPassword.test(password)) {
      this.setState({
        passwordValidate: false
      })
    }
    else if (validPassword.test(password)) {
      this.setState({
        passwordValidate: true
      })
    }
  }


  render() {
    const emailValid = this.state.emailValdate
    const passwordValid = this.state.passwordValidate

    return (

      <FormView >

        <Form
          onChange={this.changeStateEmail}
          header='email'
          buttonState={this.state.buttonPressed}
          avaliationState={this.state.emailValdate} />

        <Form
          onChange={this.changeStatePassword}
          header='password'
          buttonState={this.state.buttonPressed}
          avaliationState={this.state.passwordValidate} />


        <StyledTouchableOpacity
          onPress={this.validateLogin}>
          <ButtonText> Entrar </ButtonText>
        </StyledTouchableOpacity>

      </FormView>
    );
  }
  private changeStateEmail = (emailText: string) => {
    this.setState({
      email: emailText
    })
  }

  private changeStatePassword = (passwordText: string) => {
    this.setState({
      password: passwordText
    })
  }

  private validateLogin = () => {
    const {
      email,
      password,
    } = this.state;

    let emailValidate = validation('email', email) ? true : false
    let passwordValidate = validation('password', password) ? true : false

    if (emailValidate && passwordValidate) {
      this.setState({ emailValdate: emailValidate, passwordValidate: passwordValidate, buttonPressed: true })
      this.props.onSubmit({
        email,
        password,
      });
      return;
    }
    this.setState({ emailValdate: emailValidate, passwordValidate: passwordValidate, buttonPressed: true })
  }

  private ErrorText(state: boolean, buttonState: boolean, text: string) {
    if (!state && buttonState) {
      if (text == 'senha') {
        return (
          <Text style={{ color: '#C21807' }}>
            Senha inválida, sua senha contém 7 ou mais caracteres entre letras e números
          </Text>
        );
      }
      else if (text == 'email') {
        return (
          <Text style={{ color: '#C21807' }}>
            Seu email está incorreto, por favor use o formato ***@***.com
          </Text>
        );
      }
    }
  }


}




const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    color: '#2d3436',
    paddingHorizontal: 10

  },
  buttonContainer: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 15,
  },
  buttonText: {
    fontWeight: '800',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
