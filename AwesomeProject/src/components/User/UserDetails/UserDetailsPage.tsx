import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from "react-apollo";
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import LoginLoadingPage from '../../Login/LoginLoadingPage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyledButton from '../../UXcomponents/Buttons/StyledButton';
import { StyleView, ErrorText } from '../../UXcomponents/style';

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
            return <ErrorText> {error.message} </ErrorText>
          } return (
            <StyleView>

              <Text style={styles.name}>{data.User.name}</Text>
              <Text style={styles.email}>email: {data.User.email}</Text>
              <Text style={styles.email}>CPF: {data.User.cpf}</Text>
              <Text style={styles.email}>data de nascimento: {data.User.birthDate}</Text>
              <Text style={styles.email}>id: {data.User.id}</Text>

            </StyleView>
          );
        }}
      </Query>
    );
  }
}


const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    padding: 10
  },
  email: {
    fontSize: 20,
    padding: 10
  },

});
