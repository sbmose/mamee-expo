import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useDispatch, useSelector } from 'react-redux';

export default function useCheckAuth() {
  const [authChecked, setAuthChecked] = React.useState(false);
  const { rehydrated } = useSelector((state: any) => state._persist);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function checkData() {
      try {
        SplashScreen.preventAutoHideAsync();
        // TODO: Check auth
        setAuthChecked(true);
      } catch (e) {
        console.warn("setAuthChecked err", e);
        setAuthChecked(true);
      }
    }

    rehydrated && checkData();
  }, [rehydrated]);

  return authChecked;
}
