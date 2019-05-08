/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import ApolloClient from "apollo-boost";
import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginPage from './src/components/Login/LoginPage';
import UserListPage from './src/components/User/UserListPage';

const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql"
});


const AppStackNavegator = createStackNavigator({
  LoginPage: { screen: LoginPage },
  UserListPage: {screen: UserListPage}
});

const AppContainer = createAppContainer(AppStackNavegator)

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer/>
      </ApolloProvider>

    );
  }
}

