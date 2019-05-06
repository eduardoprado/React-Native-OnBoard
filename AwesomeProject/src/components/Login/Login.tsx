import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import LoginForm from './LoginForm';


export default class LoginScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
          <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
           <View style={{flex: 1}}>
            <Text style={styles.header}>Bem vindo(a) à Taqtile!</Text>
           </View>
          </SafeAreaView>
          
          <LoginForm/>
        </View>


      );
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