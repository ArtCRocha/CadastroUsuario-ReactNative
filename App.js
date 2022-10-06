import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/StackNavigation';
import { UsersProvider } from './src/context/UsersContext';

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    </UsersProvider>
  );
}

