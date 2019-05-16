import React from 'react';
import { Component } from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import LoginForm, { LoginFormData } from './LoginForm';
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { AUTH_KEY } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import { StyledView, ErrorText} from '../UXcomponents/style';
import { AlignedH1Text } from '../UXcomponents/headers/H1Text';
import Loading from './Loading';



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

          <AlignedH1Text> Bem vindo(a) Taqtile! </AlignedH1Text>

          <View style={{alignItems:"center"}}>
            <Image source={require('../../images/Taqtile_logo.png')} />
          </View>

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
                    {loading && <Loading />}
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
