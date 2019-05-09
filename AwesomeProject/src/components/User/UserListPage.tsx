import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from "react-apollo";
import { FlatList, StyleSheet, Text, View } from 'react-native';
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
        <Text style={styles.name}>Nome: {this.props.item.name}</Text>
        <Text style={styles.email}>email: {this.props.item.email}</Text>
      </View>
    )
  }
}


export default class UserListPage extends Component<any, undefined>{
  render() {
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <LoginLoadingPage />
          } if (error) {
            return <Text>Erro: {error.message} </Text>
          } return (
            <View style={styles.container}>
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

const list = [
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuhKKn1",
    name: 'Amy Farha',
    email: 'amyfarh@gmail.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuhKKn2",
    name: 'Chris Jackson',
    email: 'chrisbjackson22@icloud.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuhKKn3",
    name: 'André',
    email: 'andrelsfarao@voo.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuhKKn4",
    name: 'Beto',
    email: 'betoG@gmail.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuhKKn5",
    name: 'Eduardo',
    email: 'eduardo.prado@taqtile.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuhKKn6",
    name: 'Marcos',
    email: 'marcos@taqtile.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuhKKn7",
    name: 'Tiba',
    email: 'tiba@taqtile.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuhKKn8",
    name: 'Pedro',
    email: 'pgottsch@mac.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuhKKn9",
    name: 'Charles Settelman',
    email: 'choset@yahoo.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuh21n1",
    name: 'Jim Freedman',
    email: 'jfreedma@outlook.com'
  },
  {
    key: "O6W28kQOJPMKtp3LV8oWBo3VCsuh01n1",
    name: 'Alan',
    email: 'alan@taqtile.com'
  }
]

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
