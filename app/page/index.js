'use strict';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';
import Home from './home/index';
import Market from './market/index';
// import Home from './shoppingcart';
import Me from './me';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

export default class index extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            title: '<TabBarIOS>',
            description:'Tab-based navigation.',
            displayName: 'TabBarExample',
            selectedTab: 'blueTab',
            notifCount: 0,
            presses: 0,
        };
        
    }


    _addNavigator(component, title){
        var data = null;
    
        return <NavigatorIOS
          style={{flex:1}}
          barTintColor='#6bb967'
          titleTextColor="#fff"
          tintColor="#fff"
          translucent={false}
          initialRoute={{
              component: component,
              title: title,
              rightButtonTitle:"",
              passProps:{
                data: data
              }
            }} />;
      }

    _renderContent(color: string, pageText: string, num: number) {
        return (
        <View style={[styles.tabContent, {backgroundColor: color}]}>
            <Text style={styles.tabText}>{pageText}</Text>
            <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
        </View>
        );
    }

    render() {
        return (
        <TabBarIOS
            unselectedTintColor="yellow"
            tintColor="white"
            barTintColor='#6bb967'>
            <TabBarIOS.Item
            title="首页"
            icon={{uri: base64Icon, scale: 3}}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
                this.setState({
                selectedTab: 'blueTab',
                });
            }}>
            {this._addNavigator(Home,'首页')}
            {/* {this._renderContent('orange', 'orange Tab')} */}
            </TabBarIOS.Item>

            <TabBarIOS.Item
            title="分类"
            icon={{uri: base64Icon, scale: 3}}
            // systemIcon="history"
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
                this.setState({
                selectedTab: 'redTab',
                notifCount: this.state.notifCount + 1,
                });
            }}>
            {this._addNavigator(Market,'分类')}
            {/* {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)} */}
            </TabBarIOS.Item>

            <TabBarIOS.Item
            title="分销"
            icon={{uri: base64Icon, scale: 3}}
            // icon={require('../../image/icon_bottomtag_home_n.png')}
            // selectedIcon={require('../../image/icon_bottomtag_home_s.png')}
            // title="More"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
                this.setState({
                selectedTab: 'greenTab',
                presses: this.state.presses + 1
                });
            }}>
            {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
            </TabBarIOS.Item>

            <TabBarIOS.Item
            title="个人中心"
            icon={{uri: base64Icon, scale: 3}}
            selected={this.state.selectedTab === 'pinkTab'}
            onPress={() => {
                this.setState({
                selectedTab: 'pinkTab',
                });
            }}>
            {this._addNavigator(Me,'个人中心')}
            {/* {this._renderContent('pink', 'Pink Tab')} */}
            </TabBarIOS.Item>
        </TabBarIOS>
        );
    }

};

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
