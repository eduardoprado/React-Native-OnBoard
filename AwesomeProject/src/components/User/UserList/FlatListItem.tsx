import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isTemplateElement } from '@babel/types';
import { SmallButtonText, SmallStyledTouchableOpacity } from '../../UXcomponents/style';
import SmallStyledButton from '../../UXcomponents/SmallStyledButton';

export default class FlatListItem extends Component<{
  item: any;
  index: number;
  navigate: (path: string, params?: any) => void;
}, {}> {
  render() {
    const { name, email, id } = this.props.item;


    return (

      <View style={stripeStyle(this.props.index)}
      >
        <TouchableOpacity
          onPress={() => this.props.navigate('UserDetailsPage', { state: { id } })}>
          <Text style={styles.name}> {name}</Text>
          <Text style={styles.email}>email: {email}</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

const stripeStyle = (i: number) => ({
  flex: 1,
  backgroundColor: i % 2 == 0 ? '#e6e6ea' : '#f4f4f8',
  flexDirection: 'column',
  justifyContent: 'space-between'
}) as any;

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
