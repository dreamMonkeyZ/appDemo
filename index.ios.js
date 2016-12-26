/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator
} from "react-native";

import ProdList from "./prodList.js";

export default class appDemo extends Component {
  render() {
    return (
            <Navigator
              initialRoute={{name: 'prodList', component : ProdList}}
              renderScene = { (route, navigator) => {
                      let Component = route.component;
                      return (
                        <ScrollView style={styles.container}>
                          <View style = {{ alignItems : "center" }}>
                              <Component {...route.params} navigator={navigator} />
                          </View>
                        </ScrollView>
                      );
                    }
                  }
            />
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : "column", //子元素垂直排列
    // justifyContent: "flex-start" //垂直方向的排列位置
    //alignItems: "center", //水平方向的排列
    //textAlign : "center",
    backgroundColor: "#FFFFFF",
  }
});

AppRegistry.registerComponent("appDemo", () => appDemo);