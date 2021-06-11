import React from 'react';
import { Theme } from "../themes/default";
import { HeaderButton } from '../components/HeaderButton';

export const globalNavigationOptions = {
  headerStyle: {
    backgroundColor: Theme.appBg
  },
  tabStyle: {
    backgroundColor: Theme.white
  },
  headerTruncatedBackTitle: "",
  activeTintColor: Theme.pink,
  inactiveTintColor: Theme.gray,
  activeBackgroundColor: Theme.pink,
  inactiveBackgroundColor: Theme.gray,
};

export function getHeaderOptions(screenName: any) {

  return {
    ...globalNavigationOptions,
    headerLeft: () => (<HeaderButton iconName="chevron-back" color={Theme.pink} />),
    headerTitle: screenName,
    headerRight: () => null
  };
}
