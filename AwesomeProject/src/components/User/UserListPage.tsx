import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from "react-apollo";
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import LoginLoadingPage from '../Login/LoginLoadingPage';


const GET_USERS = gql`
  query Users{
    Users{
      nodes {
        name
        email
      }
    }
}
`

class FlatListItem extends Component<any, {
  item: any
  index: number
}> {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: this.props.index % 2 == 0 ? '#e6e6ea' : '#f4f4f8'
      }
      }
      >
        <Text style={styles.name}>{this.props.item.name}</Text>
        <Text style={styles.email}>email: {this.props.item.email}</Text>
      </View>
    )
  }
}


export default class UserListPage extends Component<any, undefined>{
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <LoginLoadingPage />
          } if (error) {
            return <Text>Erro: {error.message} </Text>
          } return (
            <View style={styles.container}>
              <Button onPress={() => navigate('AddUserPage')}
                title="Adicionar novo usuário" />
              <FlatList
                data={data.Users.nodes}
                renderItem={({ item, index }) => {
                  return (<FlatListItem item={item} index={index} />);
                }}
              >
              </FlatList>
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
    fontSize: 18,
    padding: 10
  },
  email: {
    fontSize: 14,
    padding: 10
  }
});
