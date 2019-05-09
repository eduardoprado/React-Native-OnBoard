import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
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
}>{
  constructor(props: any) {
    super(props);
    this.state = {
      email: 'eduardo.prado@taqtile.com',
      password: '1111',
      cpf: '42412590818',
      birthDate: '1997-10-08',
      name: 'Eduardo Prado',
      role: 'user',
      emailValidate: false,
      passwordValidate: false,
      cpfValidate: false,
      birthDateValidate: false,
      nameValidate: false,
      roleValidate: false,
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <Text style={{ color: this.state.nameValidate ? '#3CB371' : '#C21807' }}>
          Seu nome está {this.state.nameValidate ? 'correto' : 'inválida'}
        </Text>

        <TextInput
          value={this.state.name}
          placeholder="Nome"
          style={styles.name}
          onChangeText={(text) => this.setState({ name: text })}>
        </TextInput>

        <Text style={{ color: this.state.emailValidate ? '#3CB371' : '#C21807' }}>
          Seu email está {this.state.emailValidate ? 'correto' : 'inválida'}
        </Text>

        <TextInput
          value={this.state.email}
          placeholder="email"
          autoCapitalize="none"
          style={styles.name}
          onChangeText={(text) => this.setState({ email: text })}>
        </TextInput>

        <Text style={{ color: this.state.cpfValidate ? '#3CB371' : '#C21807' }}>
          Seu CPF está {this.state.cpfValidate ? 'correto' : 'inválida'}
        </Text>

        <TextInput
          value={this.state.cpf}
          placeholder="CPF"
          autoCapitalize="none"
          style={styles.name}
          onChangeText={(text) => this.setState({ cpf: text })}>
        </TextInput>

        <Text style={{ color: this.state.birthDateValidate ? '#3CB371' : '#C21807' }}>
          Seu data de nascimento está {this.state.birthDateValidate ? 'correto' : 'inválida'}
        </Text>

        <TextInput
          value={this.state.birthDate}
          placeholder="Data de Nascimento"
          autoCapitalize="none"
          style={styles.name}
          onChangeText={(text) => this.setState({ birthDate: text })}>
        </TextInput>
        {!this.state.password &&
          <Text style={{ color: '#C21807' }}>
            Você deve inserir uma senha válida
          </Text>
        }
        <TextInput
          value={this.state.password}
          placeholder="senha (opcional)"
          secureTextEntry
          style={styles.name}
          onChangeText={(text) => this.setState({ password: text })}>
        </TextInput>

        <Text style={{ color: this.state.roleValidate ? '#3CB371' : '#C21807' }}>
          Seu função está {this.state.roleValidate ? 'correto' : 'inválida'}
        </Text>

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
      </View>
    )
  }

  private validateUser = () => {
    const{
      email,
      emailValidate,
      password,
      passwordValidate,
      cpf,
      cpfValidate,
      birthDate,
      birthDateValidate,
      role,
      roleValidate,
      name,
      nameValidate
    } = this.state
    if (validation('name', name)) {
      this.setState({
        nameValidate: true
      })
    }
    if (validation('email', email)) {
      this.setState({
        emailValidate: true
      })
    }
    if (validation('cpf', cpf)) {
      this.setState({
        cpfValidate: true
      })
    }
    if (validation('birthDate', birthDate)) {
      this.setState({
        birthDateValidate: true
      })
    }
    if (validation('role',role)) {
      this.setState({
        roleValidate: true
      })
    }
    if (validation('password', password)) {
      this.setState({
        passwordValidate: true
      })
    }
    if (nameValidate&&passwordValidate&&cpfValidate&&birthDateValidate&&emailValidate&&roleValidate){
      this.props.onSubmit({
        email,
        password,
        cpf,
        birthDate,
        name,
        role
      });
      return;
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
