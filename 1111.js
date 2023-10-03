import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import secondview from './22222';
import { useNavigation } from '@react-navigation/native';


export default function Homeview({navigation}) {


  return (
    <View style={styles.Homestyle}>
      <Text>Open up App.js to start working on your app!</Text>

      <Button title ='Go 2' onPress= {() =>{
        navigation.navigate("SecondView");

      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Homestyle: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
