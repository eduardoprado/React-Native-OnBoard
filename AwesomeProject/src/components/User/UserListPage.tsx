import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from "react-apollo";
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import LoginLoadingPage from '../Login/LoginLoadingPage';
import FlatListItem from './FlatListItem';


const GET_USERS = gql`
  query Users{
    Users(limit:100){
      nodes {
        id
        name
        email
      }
    }
}
`



export default class UserListPage extends Component<any, undefined>{
  render() {
    const { navigate } = this.props.navigation;
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
                  return (<FlatListItem item={item} index={index} navigate={navigate} />);
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
  },
  buttontext:{
    fontSize: 14,
    padding: 5,
    color: 'white'
  },
  button:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  touchable:
  {backgroundColor: "skyblue",
  borderRadius: 10
  }
});
