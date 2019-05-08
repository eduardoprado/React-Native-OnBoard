import { gql } from "apollo-boost";
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const mutationToServer = gql`
  mutation LoginOperation {
    Login (data:{
      email: "admin@taqtile.com"
      password: "1111"
    }){
    user{
      id
      birthDate
      }
    }
  }
`;

export default class LoginForm extends Component<any, {
    email: string;
    password: string;
    emailValdate: boolean;
    passwordValidate: boolean}>
    {
    constructor(props: any){
        super(props);
        this.state={
            email:'',
            password:'',
            emailValdate: false,
            passwordValidate: false
        }
    }
    validate = (event:any) =>{
        let email = this.state.email
        let password = this.state.password
        const validemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/
        const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/

        if (!validemail.test(email)){
            this.setState({
                emailValdate: false
            })
        }
        else if (validemail.test(email)){
            this.setState({
                emailValdate: true
            })
        }
        if (!validPassword.test(password)){
            this.setState({
                passwordValidate: false
            })
        }
        else if (validPassword.test(password)){
            this.setState({
                passwordValidate: true
            })
        }
    }


    render() {
      const emailValid = this.state.emailValdate
      const passwordValid = this.state.passwordValidate

    return (

      <View style={styles.container}>
        <Text>
          Seu e-mail está {emailValid ? 'correto' : 'inválido'}
        </Text>

        <TextInput
          onChangeText={(text) => this.setState({ email: text })}
          placeholder="email"
          autoCapitalize="none"
          style={styles.input}
        />

          <Text>
            Sua senha está {passwordValid ? 'correto':'inválida'}
          </Text>

          <TextInput
          onChangeText={(text)=>this.setState({password:text})}
          placeholder="senha"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
          onPress={this.validate}
        >
          <Text style={styles.buttonText}>
              Entrar
          </Text>
        </TouchableOpacity>

        </View>
      );
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
