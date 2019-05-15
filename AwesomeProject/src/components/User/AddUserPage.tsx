import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { StyleSheet, Text, View, Button } from 'react-native';
import validation from '../validation';
import AddUserPageForm, {AddUserPageFormData} from './AddUserPageForm';
import LoginLoadingPage from '../Login/LoginLoadingPage';

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
      <View style={styles.container}>
        <Text style={styles.header}>
          Novo usuário
        </Text>
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

              if (loading) {
                return <LoginLoadingPage />
              }
              return (
                <>
                  <>
                    {error && <Text>Erro: {error!.message} </Text>}
                  </>
                  <AddUserPageForm onSubmit={handleSubmit} />
                </>
              )
            }}
        </Mutation>
      </View>
    )
  }

  private handleCreateSuccess = () => {
    this.props.navigation.navigate('UserListPage')
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    padding: 10,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 22,
    padding: 15,
    textAlign: 'center',
    color: '#0AE',
    fontWeight: "200"
  }
});
