// import React from 'react';
// import {createStackNavigator} from '@react-navigation/native-stack';
// import {ContactsScreen, HomeScreen} from '../screens';

// const  = createStackNavigator();

// const App = () => {
//   return (
//     <Navigator>
//       <Screen name="home" component={HomeScreen} />
//       <Screen name="contacts" component={ContactsScreen} />
//     </Navigator>
//   );
// };

// export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import ContactsScreen from '../screens/contacts';

const Stack = createNativeStackNavigator();

const AppStack=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
