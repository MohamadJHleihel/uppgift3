import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App from './App';
import HomeView from './Homeview';

export default function SecondView({navigation}) {
  return (
    <View style={styles.SecondStyle}>
      <Text>Open up App.js to start working on your app!</Text>

      <Button title ='Go 1' onPress= {() =>{
        navigation.navigate("HomeView");

      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  SecondStyle: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
