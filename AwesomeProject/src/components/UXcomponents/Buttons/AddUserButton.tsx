import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import { ButtonText } from './ButtonStyle/ButtonText';

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

        <ButtonText> {this.props.text}</ButtonText>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchable:{
    backgroundColor: '#2980B9',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    height: 44,
  },
});
