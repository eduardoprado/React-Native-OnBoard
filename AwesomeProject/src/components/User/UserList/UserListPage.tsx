import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from "react-apollo";
import { FlatList, StyleSheet, Text, View, Button, ScrollView, ActivityIndicator } from 'react-native';
import LoginLoadingPage from '../../Login/LoginLoadingPage';
import FlatListItem from './FlatListItem';
import { any } from 'prop-types';
import AddUserButton from '../../UXcomponents/Buttons/AddUserButton';


const GET_USERS = gql`
  query Users($limit: Int!, $offset:Int!){
    Users(limit:$limit offset:$offset){
      nodes {
        id
        name
        email
      }
    }
}
`



export default class UserListPage extends Component<any,
  {
    limit: number;
    offset: number;
    loading: boolean;
  }>
{
  constructor(props: any) {
    super(props);
    this.state = {
      limit: 15,
      offset: 0,
      loading: false,
    }
  }
  private dataLoad: any = []
  private FirstTime:boolean = true
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Query query={GET_USERS}
        variables={{ limit: this.state.limit, offset:this.state.offset }}>
        {({ loading, error, data }) => {
          if (loading&&this.FirstTime) {
            return <LoginLoadingPage />
          } if (error) {
            return <Text>Erro: {error.message} </Text>
          } else {
            this.FirstTime = false
            this.dataLoad = [...this.dataLoad, ...data.Users.nodes]
            const renderFooter = () => {
              if(loading){
              return (<ActivityIndicator />)}
              return null
            }
            return (
              <View style={styles.container}>
                <AddUserButton
                  onPress={() => navigate('AddUserPage')}
                  text="Adicionar novo usuário" />
                <FlatList
                  data={this.dataLoad}
                  keyExtractor={data.Users.nodes.id}
                  onEndReached={this.handleLoadMore}
                  onEndReachedThreshold={0.1}
                  ListFooterComponent={renderFooter}
                  renderItem={({ item, index }) => {
                    return (<FlatListItem item={item} index={index} navigate={navigate} />);
                  }}
                >
                </FlatList>

              </View>

            );
          }
        }}
      </Query>
    );
  }

  private renderFooter = () => {
    return(<LoginLoadingPage />)
  }

  private handleLoadMore = () =>  {
    let newoffset = this.state.offset + 10
    this.setState({ offset: newoffset})
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
  buttontext: {
    fontSize: 14,
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
