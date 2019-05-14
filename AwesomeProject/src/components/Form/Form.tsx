import React, { Component } from 'react';
import validation from '../validation';
import { StyledTouchableOpacity, ButtonText, FormView, FormInput, StyledText } from '../UXcomponents/style';
import { View } from 'react-native';
import ErrorCaption from './ErrorCaption'

export interface FormProps{
  header: string;
  buttonState: boolean;
  avaliationState: boolean;
  validatorText: string;
  onChange: (text: string)=>void;
}

export interface FormState{
  validation:string;
}

export default class Form extends Component<FormProps,FormState>{

  render() {
    return (
      <View>
        <StyledText> {this.props.header} </StyledText>

        <FormInput
          onChangeText = {(text)=> this.handleChange(text)}
          placeholder="insira aqui"
          autoCapitalize="none"
          secureTextEntry={this.testPassword(this.props.validatorText)}
        />

        <ErrorCaption avaliationText= {this.props.validatorText} buttonState={this.props.buttonState} avaliationState={this.props.avaliationState} />
      </View>
    );
  }

  private handleChange = (text: string)=>{
    this.props.onChange(text)
  }

  private testPassword = (text:string)=>{
    let isPassword = false
    if (text=='password'){
      isPassword=true
    }
    return isPassword
  }
}
