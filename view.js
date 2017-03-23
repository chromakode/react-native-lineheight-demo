import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

export default class LineHeightDemo extends Component {
  render() {
    return (
      <View style={{margin: 20}}>
        <Text style={{marginTop: 4, fontFamily: 'OpenSans', fontSize: 26, lineHeight: 20, backgroundColor: 'lightgreen'}}>OpenSans LH=20</Text>
        <Text style={{marginTop: 4, fontFamily: 'OpenSans', fontSize: 26, lineHeight: 30, backgroundColor: 'lightgreen'}}>OpenSans LH=30</Text>
        <Text style={{marginTop: 4, fontFamily: 'OpenSans', fontSize: 26, lineHeight: 45, backgroundColor: 'lightgreen'}}>OpenSans LH=45</Text>
        <Text style={{marginTop: 4, fontFamily: 'OpenSansAdjusted', fontSize: 26, lineHeight: 20, backgroundColor: 'cyan'}}>OpenSans* LH=20</Text>
        <Text style={{marginTop: 4, fontFamily: 'OpenSansAdjusted', fontSize: 26, lineHeight: 30, backgroundColor: 'cyan'}}>OpenSans* LH=30</Text>
        <Text style={{marginTop: 4, fontFamily: 'OpenSansAdjusted', fontSize: 26, lineHeight: 45, backgroundColor: 'cyan'}}>OpenSans* LH=45</Text>
        <View style={{marginTop: 8, flexDirection: 'row'}}>
          <Text style={{flex: 1, fontFamily: 'OpenSans', fontSize: 14, lineHeight: 18, backgroundColor: 'lightgreen'}}>OpenSans {'hello world '.repeat(30)}</Text>
          <Text style={{flex: 1, fontFamily: 'OpenSansAdjusted', fontSize: 14, lineHeight: 18, backgroundColor: 'cyan'}}>OpenSans*  {'hello world '.repeat(30)}</Text>
        </View>
      </View>
    )
  }
}
