import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#fff',
      // headerTitleAlign: 'center',
      // headerStyle: {
      //   backgroundColor: '#7159c1',
      // },
      // customização do header
      cardStyle: { backgroundColor: '#312e38' },
    }}
    // initialRouteName= "SignUp"  // inicializar em uma rota específica
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
