
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import store from './src/store'
import {Provider} from 'react-redux'
import GalleryList from './src/pages/GalleryList'




export default class App extends Component {
  render() {
    return (
    	<Provider store={store}>
				<View style={styles.container}>

					<Text style={styles.welcome}>Hello Ppin!</Text>
					<GalleryList />
				</View>
			</Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
