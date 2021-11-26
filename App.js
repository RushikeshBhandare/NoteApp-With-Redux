import React from "react";
import { Provider } from "react-redux";
import { Text, View } from "react-native";

import AppNavigator from './src/navigation'
import Store from "./src/redux/Store";

const App = () => {
  return (
    <Provider store={ Store}>
      <AppNavigator/> 
    </Provider>
    // <View>
    //   <Text>
    //     Hello
    //   </Text>
    // </View>
  )
}

export default App