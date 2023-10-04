import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { Button } from 'react-native';
import homeview from './Home';
import { useNavigation } from '@react-navigation/native';


export default function Secondview({navigation}) {
  return (
    <View style={styles.secondstyle}>
      <Text style={styles.bigText}>All our drinks are 100% free of sugar</Text>

      <Button title ='Go to main menu' onPress= {() =>{
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
  bigText: {
  fontSize: 40,
  },
});
