import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App from './App';
import SecondView from './secondview';
export default function HomeView({navigation}) {
  return (
    <View style={styles.HomeView}>
      <Text>Open up App.js to start working on your app!</Text>

      <Button title ='Go 2' onPress= {() =>{
        navigation.navigate("SecondView");

      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeView: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
