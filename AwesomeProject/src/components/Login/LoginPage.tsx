import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginForm, { LoginFormData } from './LoginForm';
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { AUTH_KEY } from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';
import LoginLoadingPage from './LoginLoadingPage';
import { StyledHeaderText, StyledView, ErrorText } from '../UXcomponents/style';



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
      <StyledView>
        <SafeAreaView>
          <StyledHeaderText> Bem vindo(a) Taqtile!</StyledHeaderText>
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
              return (
                <>
                  <>
                    {loading && <LoginLoadingPage/>}
                    {error && <ErrorText>Erro: {error!.message} </ErrorText>}
                  </>
                  <LoginForm onSubmit={handleSubmit} />
                </>
              )
            }}
          </Mutation>
        </SafeAreaView>
      </StyledView>
    );
  }

  private handleLoginSuccess = (data: any) => {
    const { token } = data.Login;
    AsyncStorage.setItem(AUTH_KEY, token)
      .then(() => this.props.navigation.navigate('UserListPage'));

  }

}
