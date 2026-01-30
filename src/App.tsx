/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AuthProvider } from './context/AuthContext';
import { AppNavigator } from './navigation/AppNavigator';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppNavigator />
        <Toast /> 
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
