import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ThemeLibProvider } from '@rpc_1910/ui';
import HomeModule from '@rpc_1910/home-module';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <ThemeLibProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeModule}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeLibProvider>
  );
}

export default App;
