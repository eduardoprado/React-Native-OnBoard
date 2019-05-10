import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from "react-apollo";
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import LoginLoadingPage from '../Login/LoginLoadingPage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GET_INFO = gql`
  query Users($id: Int!){
    User(id: $id){
        id
        name
      	cpf
      	birthDate
        email
      	role
    }
}
`

export default class UserDetailsPage extends Component<any, {}>{
  render() {
    return (
      <Query query={GET_INFO}
        variables={{ id: this.props.navigation.state.params.state.id }}>

        {({ loading, error, data }) => {
          if (loading) {
            return <LoginLoadingPage />
          } if (error) {
            return <Text>Erro: {error.message} </Text>
          } return (
            <View style={styles.container}>
              <Text style={styles.name}>{data.User.name}</Text>
              <Text style={styles.email}>email: {data.User.email}</Text>
              <Text style={styles.email}>CPF: {data.User.cpf}</Text>
              <Text style={styles.email}>data de nascimento: {data.User.birthDate}</Text>
              <Text style={styles.email}>id: {data.User.id}</Text>
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => this.props.navigation.navigate('UserListPage')}
                >
                  <Text style={styles.buttontext}>
                    Voltar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Query>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  },
  name: {
    fontSize: 26,
    padding: 10
  },
  email: {
    fontSize: 20,
    padding: 10
  },
  buttontext: {
    fontSize: 26,
    padding: 5,
    color: 'white'
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  touchable:
  {
    backgroundColor: "skyblue",
    borderRadius: 10
  }
});
