import * as React from 'react';
import * as Font from 'expo-font';
//import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Preloadoad fonts and icons
        await Font.loadAsync({
          //...Ionicons.font,
          //...MaterialCommunityIcons.font,
          //...MaterialIcons.font,
          //'Roboto': require('native-base/Fonts/Roboto.ttf'),
          //'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
