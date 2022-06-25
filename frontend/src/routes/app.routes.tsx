import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { LoginToken } from '../screens/LoginToken';
import { Home } from '../screens/Home';
import { Confirm } from '../screens/Confirm';
import { Payment } from '../screens/Payment';
import { Contract } from '../screens/Contract';
import { ProfileInfluencer } from '../screens/ProfileInfluencer';
import { BudgetInfluencer } from '../screens/BudgetInfluencer';

export const AppRoutes = () => {
  return(
    <Navigator>
      <Screen
        name="Login"
        component={ LoginToken }
      />
      <Screen
        name="Home"
        component={ Home }
      />
    </Navigator>
  )
}