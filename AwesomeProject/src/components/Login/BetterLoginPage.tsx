import React from 'react';
import { Component } from 'react';
import { View, SafeAreaView, Image, Text } from 'react-native';
import LoginForm, { LoginFormData } from './LoginForm';
import { gql, ApolloError } from "apollo-boost";
import { Mutation } from "react-apollo";
import { AUTH_KEY } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import { StyledView, ErrorText } from '../UXcomponents/style';
import { AlignedH1Text } from '../UXcomponents/headers/H1Text';
import Loading from './Loading';
import { any } from 'prop-types';



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

export interface LoginPageClass {
  loading: boolean;
  error: ApolloError | undefined;
  Submit: any
}

export default class LoginPage extends Component<any, LoginPageClass> {

  state = {
    loading: false,
    error: undefined,
    Submit: any
  }

  render() {
    <Mutation
      mutation={mutationToServer}
      onCompleted={this.handleLoginSuccess}
    >

      {(mutationFunction, { loading, error }) => {
        const Submit = (loginFormData: LoginFormData) => {

          const { email, password } = loginFormData;

          mutationFunction({
            variables: {
              email,
              password,
            }
          });
        }
        //this.setState({ loading: loading, error: error, Submit: Submit })
      }}
    </Mutation>

    return (<DummyLoginPage handleSubmit={this.state.Submit} loading={this.state.loading} error={this.state.error} />);
  }


  private handleLoginSuccess = (data: any) => {
    const { token } = data.Login;
    AsyncStorage.setItem(AUTH_KEY, token)
      .then(() => this.props.navigation.navigate('UserListPage'));

  }
}


const DummyLoginPage = ({ handleSubmit, loading, error }) => {

  return (
    <>
      <>
        {loading && <Loading />}
        {error && <ErrorText>Erro: {this.errorVariable!.message} </ErrorText>}
      </>
      <LoginForm onSubmit={handleSubmit} />
    </>);
}
