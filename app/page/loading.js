/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-3-19 18:09:57
 * @version $Id$
 */
 
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class loading extends Component{
  getInitialState() {
    return {
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={[styles.container]}>
        <Text>{this.props.loadingtext}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});