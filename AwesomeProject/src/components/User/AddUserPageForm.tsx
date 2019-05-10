import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import validation from '../validation';

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

export default class AddUserPageForm extends Component<AddUserFormProps, {
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
}>{
  constructor(props: any) {
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

        {this.ErrorText(this.state.nameValidate, this.state.buttonPressed, 'name')}

        <TextInput
          value={this.state.name}
          placeholder="Nome"
          style={styles.name}
          onChangeText={(text) => this.setState({ name: text })}>
        </TextInput>

        {this.ErrorText(this.state.emailValidate, this.state.buttonPressed, 'email')}

        <TextInput
          value={this.state.email}
          placeholder="email"
          autoCapitalize="none"
          style={styles.name}
          onChangeText={(text) => this.setState({ email: text })}>
        </TextInput>

        {this.ErrorText(this.state.cpfValidate, this.state.buttonPressed, 'cpf')}

        <TextInput
          value={this.state.cpf}
          placeholder="CPF"
          autoCapitalize="none"
          style={styles.name}
          onChangeText={(text) => this.setState({ cpf: text })}>
        </TextInput>

        {this.ErrorText(this.state.birthDateValidate, this.state.buttonPressed, 'birthDate')}

        <TextInput
          value={this.state.birthDate}
          placeholder="Data de Nascimento"
          autoCapitalize="none"
          style={styles.name}
          onChangeText={(text) => this.setState({ birthDate: text })}>
        </TextInput>

        {this.ErrorText(this.state.passwordValidate, this.state.buttonPressed, 'senha')}

        <TextInput
          value={this.state.password}
          placeholder="senha (opcional)"
          secureTextEntry
          style={styles.name}
          onChangeText={(text) => this.setState({ password: text })}>
        </TextInput>

        {this.ErrorText(this.state.roleValidate, this.state.buttonPressed, 'role')}

        <TextInput
          value={this.state.role}
          placeholder="Função (admin ou user)"
          autoCapitalize="none"
          style={styles.name}
          onChangeText={(text) => this.setState({ role: text })}>

        </TextInput>

        <Button
          onPress={this.validateUser}
          title="Entrar"
        />
      </ScrollView>
    )
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

  private ErrorText(state: boolean, buttonState: boolean, text: string) {
    if (!state&&buttonState) {
      if (text == 'senha') {
        return (
          <Text style={{ color: '#C21807' }}>
            Senha inválida, sua tem que conter 7 ou mais caracteres entre letras e números
          </Text>
        );
      }
      if (text == 'email') {
        return (
          <Text style={{ color: '#C21807' }}>
            Seu email está inválido, por favor use o formato ***@***.com
          </Text>
        );
      }
      if (text == 'birthDate') {
        return (
          <Text style={{ color: '#C21807' }}>
            Data incorreta, use o padrão YYYY-MM-DD
          </Text>
        );
      }
      if (text == 'cpf') {
        return (
          <Text style={{ color: '#C21807' }}>
            CPF inválido
          </Text>
        );
      }
      if (text == 'name') {
        return (
          <Text style={{ color: '#C21807' }}>
            Nome inválido
          </Text>
        );
      }
      if (text == 'role') {
        return (
          <Text style={{ color: '#C21807' }}>
            Função inváilida, pode ser apenas user ou admin
          </Text>
        );
      }
    }
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
  header: {
    fontSize: 28,
    padding: 15,
    textAlign: 'center',
    color: '#0AE',
    fontWeight: "200"
  }
});
