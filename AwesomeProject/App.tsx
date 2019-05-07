/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginPage from './src/components/Login/LoginPage';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://tq-template-server-sample.herokuapp.com/graphql"
});


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <LoginPage/>
      </ApolloProvider>

    );
  }
}

