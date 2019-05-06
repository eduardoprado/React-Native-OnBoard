import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';

export default class LoginForm extends Component {
    render() {
      return (
        <View style={styles.container}>
          <TextInput 
          placeholder="email"
          style={styles.input}
          />
          <TextInput 
          placeholder="senha"
          secureTextEntry
          style={styles.input}
          />

          <TouchableOpacity style={styles.buttonContainer}>
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