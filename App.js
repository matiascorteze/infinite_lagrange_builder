import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Fonts from './constants/Fonts';
import MainNavigator from "./navigation"
import { Provider } from "react-redux"
import store from "./store";

export default function App() {

  const [loaded] = useFonts({
    Lato: require('./assets/fonts/Lato-Regular.ttf'),
    [Fonts.titleFont]: require('./assets/fonts/Lato-Bold.ttf'),
  })

  if (!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>

  );
}