import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Secondview from './22222';
import Homeview from './1111';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name='HomeView' component ={Homeview} />
       <Stack.Screen name= 'SecondView'component={Secondview} /> 
       
       
     </Stack.Navigator>



     </NavigationContainer>
  );
    
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
