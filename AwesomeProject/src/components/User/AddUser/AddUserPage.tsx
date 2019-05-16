import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { StyleSheet, Text, View, Button } from 'react-native';
import validation from '../../validation';
import AddUserPageForm, {AddUserPageFormData} from './AddUserPageForm';
import { StyledView, ErrorText } from '../../UXcomponents/style';
import Loading from '../../Login/Loading';
import { AlignedH1Text } from '../../UXcomponents/headers/h1Text';

const CREATE_OPERATION = gql`
  mutation CreateOp($email:String!, $password:String!, $name:String!, $role:UserRoleType!, $cpf:String!, $birthDate:String!){
    UserCreate(data: {
        email: $email
        password: $password
        name: $name
        role: $role
        cpf: $cpf
        birthDate: $birthDate
    }){
        name
        email
    }
  }
  `

export default class AddUserPage extends Component<any, undefined>{
  render() {
    return (
      <StyledView>

        <AlignedH1Text>
          Novo usuário
        </AlignedH1Text>

        <Mutation
          mutation={CREATE_OPERATION}
          onCompleted={this.handleCreateSuccess}
        >
          {(mutationFunction, { loading, error }) => {
              const handleSubmit = (addUserPageFormData: AddUserPageFormData) => {
                const { email, password, cpf, name, birthDate, role } = addUserPageFormData;

                mutationFunction({
                  variables: {
                    email,
                    password,
                    cpf,
                    name,
                    birthDate,
                    role
                  }
                });
              };
              return (
                <>
                  <>
                    {loading && <Loading/>}
                    {error && <ErrorText> Erro: {error!.message} </ErrorText> }
                  </>
                  <AddUserPageForm onSubmit={handleSubmit} />
                </>
              )
            }}
        </Mutation>
      </StyledView>
    )
  }

  private handleCreateSuccess = () => {
    this.props.navigation.navigate('UserListPage')
  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    padding: 15,
    textAlign: 'center',
    color: '#0AE',
    fontWeight: "200"
  }
});
