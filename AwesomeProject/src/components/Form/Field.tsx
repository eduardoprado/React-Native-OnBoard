import React, { Component } from 'react';
import { StyledText } from '../UXcomponents/style';
import ErrorCaption from './ErrorCaption'
import { FormView } from '../UXcomponents/Form/FormView';
import { FormInput } from '../UXcomponents/Form/FormInput';


export interface FormProps{
  label: string;
  buttonState: boolean;
  avaliationState: boolean;
  validatorText: string;
  onChange: (text: string)=>void;
}

export interface FormState{
  validation:string;
}

export class Field extends Component<FormProps,FormState>{

  render() {
    return (

      <FormView>
        <StyledText> {this.props.label} </StyledText>

        <FormInput
          onChangeText = {(text)=> this.handleChange(text)}
          placeholder="insira aqui"
          autoCapitalize="none"
          secureTextEntry={this.testPassword(this.props.validatorText)}
        />

        <ErrorCaption avaliationText= {this.props.validatorText} buttonState={this.props.buttonState} avaliationState={this.props.avaliationState} />
      </FormView>
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
