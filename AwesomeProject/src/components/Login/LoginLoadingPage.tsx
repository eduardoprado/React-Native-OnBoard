import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, TextInput, View, TouchableOpacity, Text, Button, ActivityIndicator } from 'react-native';

export default class LoginLoadingPage extends Component {
  render() {
    return (
      <View style={[styles.container,styles.horizontal]}>
        <ActivityIndicator size="small" color="0000ff"/>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    flex: 1,
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#F00000',
    marginBottom: 5,
  },
  horizontal:{
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  }
});

