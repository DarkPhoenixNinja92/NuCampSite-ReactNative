import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./screens/MainComponent";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Main />
      </NavigationContainer>
    </Provider>
  );
}