import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Fonts from './constants/Fonts';
import MainNavigator from "./navigation"


export default function App() {

  const [loaded] = useFonts({
    Lato: require('./assets/fonts/Lato-Regular.ttf'),
    [Fonts.titleFont]: require('./assets/fonts/Lato-Bold.ttf'),
  })

  if (!loaded) return <AppLoading />

  return (
    <MainNavigator />
  );
}
