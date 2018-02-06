/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegitry,
  Image,
  StyleSheet
} from 'react-native';

export default class ImageElement extends Component {
  
}

export default class App extends Component {
  render() {
    return (
      <Image source={this.props.imgsource} style={styles.image}></Image>
    );
  }
}

const styles = StyleSheet.create({
  image: {flex:1}
});
