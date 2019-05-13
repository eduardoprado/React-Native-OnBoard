import React, { Component } from 'react';
import { Text } from 'react-native';
import validation from '../validation';
import { ErrorText } from '../UXcomponents/style';

export default class ErrorCaption extends Component<{
  header: string;
  buttonState: boolean;
  avaliationState: boolean;
},{}>{
  render(){

    return(
      <>
      {this.ErrorText(this.props.avaliationState, this.props.buttonState, this.props.header)}
      </>
    );
  }

  private ErrorText(avaliationState: boolean, buttonState: boolean, text: string) {
    if (!avaliationState&&buttonState) {
      if (text == 'password') {
        return (
          <ErrorText>
            Senha inválida, sua senha tem que conter 7 ou mais caracteres entre letras e números
          </ErrorText>
        );
      }
      if (text == 'email') {
        return (
          <ErrorText>
            Seu email está inválido, por favor use o formato ***@***.com
          </ErrorText>
        );
      }
      if (text == 'birthDate') {
        return (
          <ErrorText>
            Data incorreta, use o padrão YYYY-MM-DD
          </ErrorText>
        );
      }
      if (text == 'cpf') {
        return (
          <ErrorText>
            CPF inválido
          </ErrorText>
        );
      }
      if (text == 'name') {
        return (
          <ErrorText>
            Nome inválido
          </ErrorText>
        );
      }
      if (text == 'role') {
        return (
          <ErrorText>
            Função inváilida, pode ser apenas user ou admin
          </ErrorText>
        );
      }
    }
  }

}
