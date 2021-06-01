import React from 'react';

import { Theme } from '../themes/default';
import { GlobalNavigationOptions } from '../navigation/GlobalNavigationOptions';
import { HeaderButton } from '../components/HeaderButton';

export function getHeaderOptions(screenName: any) {

    return {
        ...GlobalNavigationOptions,
        headerLeft: () => (<HeaderButton iconName="chevron-back" color={Theme.pink} />),
        headerTitle: screenName,
        headerRight: () => null
    };
}

