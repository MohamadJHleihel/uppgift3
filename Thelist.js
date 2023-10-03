import { FlatList,Text,StatusBar,StyleSheet,View,TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';



export default function Flat ({navigation}) {

    const [coffeMenu, setCoffemenu] = useState([
    {sort:1, title:"ApelsinJuice", description:" "},
    {sort:2, title:"Banansmoothie", description:" "},
    {sort:3, title:"Cider", description:"sugar"}
    ]); 
    
  
    
   
    return (
      <View style={styles.basket}>
   
          <FlatList
            data={coffeMenu}
            keyExtractor={(item) => item.sort}
            renderItem= {({item}) => 
              <TouchableOpacity onPress={() => {
                navigation.navigate ('SecondView');
              }}>
                <Text style={styles.title}>{item.title}</Text>
               
                
               
              
             </TouchableOpacity>
              }
          />
       </View>
    );
    







}
const styles = StyleSheet.create({
    title: {
      flex:1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
    },
    basket: {
        flex:1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
  }
});