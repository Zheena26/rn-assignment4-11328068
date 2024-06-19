// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// const App = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <View style={styles.container}>
//       {!user ? <LoginScreen setUser={setUser} /> : <HomeScreen user={user} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
// });

// export default App;

import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';  // Ensure this path is correct
import HomeScreen from './screens/HomeScreen';  // Ensure this path is correct

// Enable react-native-screens for better performance
enableScreens();

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} user={user} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} setUser={setUser} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
