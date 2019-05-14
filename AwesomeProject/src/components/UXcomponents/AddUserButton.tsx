import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export interface ButtonProps {
  onPress: (e:any)=>void
  text: string
}

export interface ButtonState {

}

export default class AddUserButton extends Component<ButtonProps, ButtonState>{
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.touchable}>

        <Text style={styles.buttonText}> {this.props.text}</Text>

      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  touchable:{
    backgroundColor: '#2980B9',
    borderRadius: 20,
    padding: 10
  },
  buttonText:{
    color: '#fff'
  }
});
