import React, { Component } from 'react';
import { StyledTouchableOpacity, ButtonText } from './style';

export interface ButtonProps {
  onPress: (e:any)=>void
  text: string
}

export interface ButtonState {

}

export default class StyledButton extends Component<ButtonProps, ButtonState>{
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <StyledTouchableOpacity
        onPress={this.props.onPress}>
        <ButtonText> {this.props.text}</ButtonText>
      </StyledTouchableOpacity>
    );
  }

}
