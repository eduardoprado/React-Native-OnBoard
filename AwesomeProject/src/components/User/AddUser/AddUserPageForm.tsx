import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import validation from '../../validation';
import {Field} from '../../Form/Field';
import AddUserButton from '../../UXcomponents/Buttons/AddUserButton';

export interface AddUserPageFormData {
  email: string;
  password: string;
  cpf: string;
  birthDate: string,
  name: string,
  role: string
}

export interface AddUserFormProps {
  onSubmit: (data: AddUserPageFormData) => void;
}

export interface AddUserFormState{
  email: string;
  password: string;
  cpf: string;
  birthDate: string;
  name: string;
  role: string;
  emailValidate: boolean;
  passwordValidate: boolean;
  cpfValidate: boolean;
  birthDateValidate: boolean;
  nameValidate: boolean;
  roleValidate: boolean;
  buttonPressed: boolean;
}

export default class AddUserPageForm extends Component<AddUserFormProps, AddUserFormState>{
  constructor(props: AddUserFormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      cpf: '',
      birthDate: '',
      name: '',
      role: '',
      emailValidate: false,
      passwordValidate: false,
      cpfValidate: false,
      birthDateValidate: false,
      nameValidate: false,
      roleValidate: false,
      buttonPressed: false
    }
  }
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <Field
        onChange={this.changeStateName}
        label='Nome:'
        validatorText= 'name'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.nameValidate}/>

        <Field
        onChange={this.changeStateEmail}
        label='Email:'
        validatorText= 'email'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.emailValidate}/>

        <Field
        onChange={this.changeStateCpf}
        label='CPF:'
        validatorText= 'cpf'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.cpfValidate}/>

        <Field
        onChange={this.changeStateBirthDate}
        label='Data de nascimento'
        validatorText= 'birthDate'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.birthDateValidate}/>

        <Field
        onChange={this.changeStatePassword}
        label='Senha'
        validatorText= 'password'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.passwordValidate}/>

        <Field
        onChange={this.changeStateRole}
        label='Função'
        validatorText= 'role'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.roleValidate}/>


        <AddUserButton
        onPress={this.validateUser}
        text="Adicionar Usuário"/>

      </ScrollView>
    )
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

  private changeStateName = (nameText: string) => {
    this.setState({
      name: nameText
    })
  }

  private changeStateCpf = (cpfText: string) => {
    this.setState({
      cpf: cpfText
    })
  }
  private changeStateBirthDate = (birthDateText: string) => {
    this.setState({
      birthDate: birthDateText
    })
  }

  private changeStateRole = (roleText: string) => {
    this.setState({
      role: roleText
    })
  }

  private validateUser = () => {
    const {
      email,
      password,
      cpf,
      birthDate,
      role,
      name,
    } = this.state

    let emailValidate = validation('email', email) ? true : false
    let passwordValidate = validation('password', password) ? true : false
    let cpfValidate = validation('cpf', cpf) ? true : false
    let birthDateValidate = validation('birthDate', birthDate) ? true : false
    let roleValidate = validation('role', role) ? true : false
    let nameValidate = validation('name', name) ? true : false

    if (nameValidate && passwordValidate && cpfValidate && birthDateValidate && emailValidate && roleValidate) {
      this.props.onSubmit({
        email,
        password,
        cpf,
        birthDate,
        name,
        role});
      return;
    }

    this.setState({
      emailValidate: emailValidate,
      passwordValidate: passwordValidate,
      cpfValidate: cpfValidate,
      birthDateValidate: birthDateValidate,
      nameValidate: nameValidate,
      roleValidate: roleValidate,
      buttonPressed: true
    })
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  }
});
