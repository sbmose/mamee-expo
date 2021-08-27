import React from 'react';
import { Theme } from "../themes/default";
import { HeaderButton } from '../components/HeaderButton';

export const globalNavigationOptions: any = {
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

export const topTabBarOptions: any = {
  activeTintColor: Theme.black,
  indicatorStyle: {
    backgroundColor: Theme.pink,
  },
  header: {
    backgroundColor: Theme.pink
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: 'none',
    borderColor: Theme.pink
  },
  style: { backgroundColor: Theme.appBg },
}

export function getHeaderOptions(screenName: any) {

  return {
    ...globalNavigationOptions,
    headerLeft: () => (<HeaderButton iconName="chevron-back" color={Theme.pink} />),
    headerTitle: screenName,
    headerRight: () => null
  };
}
