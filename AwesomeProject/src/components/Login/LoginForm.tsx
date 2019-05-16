import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Field} from '../Form/Field';
import StyledButton from '../UXcomponents/Buttons/StyledButton';
import { PageFormView } from '../UXcomponents/Form/PageFormView';
import validation from '../validation';

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
      email: 'admin@taqtile.com',
      password: '1234qwer',
      emailValdate: false,
      passwordValidate: false,
      buttonPressed: false
    }
  }

  render() {
    return (

      <PageFormView>

        <Field
          onChange={this.changeStateEmail}
          label='Email:'
          buttonState={this.state.buttonPressed}
          avaliationState={this.state.emailValdate}
          validatorText='email' />

        <Field
          onChange={this.changeStatePassword}
          label='Senha:'
          validatorText='password'
          buttonState={this.state.buttonPressed}
          avaliationState={this.state.passwordValidate} />


        <StyledButton
          onPress={this.validateLogin}
          text="Entrar" />

      </PageFormView>
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

