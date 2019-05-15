import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import validation from '../../validation';
import StyledButton from '../../UXcomponents/Buttons/StyledButton';
import Form from '../../Form/Form';
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

        <Form
        onChange={this.changeStateName}
        header='Nome:'
        validatorText= 'name'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.nameValidate}/>

        <Form
        onChange={this.changeStateEmail}
        header='Email:'
        validatorText= 'email'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.emailValidate}/>

        <Form
        onChange={this.changeStateCpf}
        header='CPF:'
        validatorText= 'cpf'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.cpfValidate}/>

        <Form
        onChange={this.changeStateBirthDate}
        header='Data de nascimento'
        validatorText= 'birthDate'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.birthDateValidate}/>

        <Form
        onChange={this.changeStatePassword}
        header='Senha'
        validatorText= 'password'
        buttonState={this.state.buttonPressed}
        avaliationState={this.state.passwordValidate}/>

        <Form
        onChange={this.changeStateRole}
        header='Função'
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
  },
  name: {
    fontSize: 18,
    padding: 10,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  validatorText: {
    fontSize: 28,
    padding: 15,
    textAlign: 'center',
    color: '#0AE',
    fontWeight: "200"
  }
});
