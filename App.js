import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import secondview from './secondview';
import homeview from './Homeview';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name='HomeView' component ={homeview} />
       <Stack.Screen name= 'SecondView'component={secondview} /> 
       
       
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
