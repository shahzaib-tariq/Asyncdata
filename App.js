import React, { Component } from 'react';
import {

  StyleSheet,
    textstyle,
  Text,
  View,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';



export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textstyle} onPress={this.saveData}>Save data</Text>
                <Text style={styles.textstyle} onPress={this.displayData}>Disply data</Text>
            </View>
        );
    }

    saveData() {
      let obj={
          name:'shahzaib',
          email:'shahzaib@gmail.com',
          city:'lahore',
      }
         AsyncStorage.setItem('user',JSON.stringify(obj));
        AsyncStorage.setItem('name');
        AsyncStorage.setItem('email');
        AsyncStorage.setItem('city');
    }

    displayData = async ()=> {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed =JSON.parse(user);
            alert(parsed.email);
        }
        catch (error) {
            alert(error);
        }

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    textstyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
