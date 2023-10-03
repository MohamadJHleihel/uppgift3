import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import homeview from './1111';
import { useNavigation } from '@react-navigation/native';


export default function Secondview({navigation}) {
  return (
    <View style={styles.secondstyle}>
      <Text>Open up App.js to start working on your app!</Text>

      <Button title ='Go 1' onPress= {() =>{
        navigation.navigate("HomeView");

      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  secondstyle: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
