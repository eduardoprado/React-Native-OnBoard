import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from "react-apollo";
import { StyleSheet, Text, View } from 'react-native';
import { StyleView, ErrorText } from '../../UXcomponents/style';
import { H1Text } from '../../UXcomponents/headers/H1Text';
import Loading from '../../Login/Loading';

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
            return <Loading />
          } if (error) {
            return <ErrorText> {error.message} </ErrorText>
          } return (
            <StyleView>

              <H1Text>{data.User.name}</H1Text>

              <View style={styles.view}>
                <Text style={styles.title}> email: </Text>
                <Text style={styles.explanation}> {data.User.email} </Text>
              </View>

              <View style={styles.view}>
                <Text style={styles.title}> CPF: </Text>
                <Text style={styles.explanation}> {data.User.cpf}</Text>
              </View>

              <View style={styles.view}>
                <Text style={styles.title}> data de nascimento:</Text>
                <Text style={styles.explanation}> {data.User.birthDate}</Text>
              </View>

              <View style={styles.view}>
                <Text style={styles.title}> id: </Text>
                <Text style={styles.explanation}>{data.User.id}</Text>
              </View>

            </StyleView>
          );
        }}
      </Query>
    );
  }
}


const styles = StyleSheet.create({
  explanation: {
    fontSize: 16,
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  view: {
    padding: 10
  },
  id: {
    marginBottom: 40,
    flex: 1,
    flexDirection: 'row',

  }
});
