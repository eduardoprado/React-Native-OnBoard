import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';


export default class LoginForm extends Component<any, {
    email: string;
    senha: string;
    emailValdate: boolean;
    senhaValdate: boolean}> 
    {
    constructor(props: any){
        super(props);
        this.state={
            email:'',
            senha:'',
            emailValdate: false,
            senhaValdate: false
        }
    }
    validate = (event:any) =>{
        var email = this.state.email
        var senha = this.state.senha
        var validemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/
        var validsenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/

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
        if (!validsenha.test(senha)){
            this.setState({
                senhaValdate: false
            })
        }
        else if (validsenha.test(senha)){
            this.setState({
                senhaValdate: true
            })
        }
    }


    render() {
      const emailValid = this.state.emailValdate
      const senhaValid = this.state.senhaValdate
      
      return (
        
        <View style={styles.container}>
          <Text>
            Seu e-mail está {emailValid ? 'correto':'inválido'}
          </Text>

          <TextInput 
          onChangeText={(text)=>this.setState({email:text})}
          placeholder="email"
          autoCapitalize = "none"
          style={styles.input}
          />

          <Text>
            Sua senha está {senhaValid ? 'correto':'inválida'} 
          </Text>   

          <TextInput 
          onChangeText={(text)=>this.setState({senha:text})}
          placeholder="senha"
          secureTextEntry
          style={styles.input}
          />

          <TouchableOpacity 
          style={styles.buttonContainer}
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