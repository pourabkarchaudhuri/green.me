import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ComingSoonScreen from "../../screens/ComingSoon";
import InfoModalScreen from "../../screens/InfoModal";

const Stack = createStackNavigator();

const ModalNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="ComingSoonModal"
      options={ComingSoonScreen.navigationOptions}
      component={ComingSoonScreen}
    />
    <Stack.Screen
      name="InfoModal"
      options={InfoModalScreen.navigationOptions}
      component={InfoModalScreen}
    />
  </Stack.Navigator>
);

export default ModalNavigator;
