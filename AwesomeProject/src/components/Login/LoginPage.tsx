import React from 'react';
import { Component } from 'react';
import {  StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginForm, { LoginFormData } from './LoginForm';
import { gql} from "apollo-boost";
import { Mutation } from "react-apollo";
import { AUTH_KEY } from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';
import LoginLoadingPage from './LoginLoadingPage';



const mutationToServer = gql`
  mutation LoginOperation ($email: String!, $password: String!){
    Login (data:{
      email: $email
      password: $password
    }){
    token
    }
  }
`;


export default class LoginPage extends Component<any, undefined> {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Bem vindo(a) à Taqtile!</Text>
          </View>
        </SafeAreaView>
        <Mutation
          mutation={mutationToServer}
          onCompleted={this.handleLoginSuccess}
        >

          {(mutationFunction, { loading, error }) => {

            const handleSubmit = (loginFormData: LoginFormData) => {
              const { email, password } = loginFormData;

              mutationFunction({
                variables: {
                  email,
                  password,
                }
              });
            };

            if (loading) {
              return <LoginLoadingPage />
            }
            return (
              <>
                <>
                {error && <Text>Erro: {error!.message} </Text>}
                </>
                <LoginForm onSubmit={handleSubmit} />
              </>
            )
          }}
        </Mutation>
      </View>
    );
  }

  private handleLoginSuccess = (data: any) => {
    const { token } = data.Login;
    AsyncStorage.setItem(AUTH_KEY, token)
      .then(() => this.props.navigation.navigate('UserListPage'));

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#F00000',
    marginBottom: 5,
  },
});
