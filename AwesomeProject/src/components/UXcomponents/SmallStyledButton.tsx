import React, { Component } from 'react';
import { SmallStyledTouchableOpacity, SmallButtonText } from './style';

export interface ButtonProps {
  onPress: (e:any)=>void
  text: string
}

export interface ButtonState {
}

export default class SmallStyledButton extends Component<ButtonProps, ButtonState>{
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <SmallStyledTouchableOpacity
        onPress={this.props.onPress}>
        <SmallButtonText> {this.props.text}</SmallButtonText>
      </SmallStyledTouchableOpacity>
    );
  }

}
