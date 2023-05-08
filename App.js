import { useFonts } from 'expo-font';
import Navigation from './src/components/Navigation';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    'back-groove': require('./assets/fonts/back-groove.ttf'),
  });

  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}