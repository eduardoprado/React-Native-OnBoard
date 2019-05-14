import { gql } from "apollo-boost";
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import validation from '../validation';
import { StyledTouchableOpacity, ButtonText, FormView, FormInput } from '../UXcomponents/style';
import Form from '../Form/Form'
import StyledButton from '../UXcomponents/StyledButton';

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
}

export interface LoginFormState{
  email: string;
  password: string;
  emailValdate: boolean;
  passwordValidate: boolean;
  buttonPressed: boolean;
}

export default class LoginForm extends Component<LoginFormProps, LoginFormState>{

  constructor(props: LoginFormProps) {
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
          header='Email:'
          buttonState={this.state.buttonPressed}
          avaliationState={this.state.emailValdate}
          validatorText='email' />

        <Form
          onChange={this.changeStatePassword}
          header='Senha:'
          validatorText='password'
          buttonState={this.state.buttonPressed}
          avaliationState={this.state.passwordValidate} />


        <StyledButton
          onPress={this.validateLogin}
          text="Entrar" />

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
