import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import { Button } from 'react-native';
import secondview from './22222';
import { useNavigation } from '@react-navigation/native';
import Flat from './Thelist';


export default function Homeview({navigation}) {


  return (
    <View style={styles.Homestyle}>
      <Text>Welcome! choose a drink </Text>
      <View style={styles.lineStyle}>
      <Button color="white" title ='Note about our drinks'  onPress= {() =>{
        navigation.navigate("SecondView");

      }}/>
      </View>
      <Flat/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  Homestyle: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineStyle: {
    weight: 100,
    length:100,
    backgroundColor:'blue',
    itemText:'wh',

  }
});
