import { FlatList,Text,StatusBar,StyleSheet,View } from "react-native";

export default function Flat () {

    const data = [{sort:1, title:"Iced Espresso", description:"no sugar"},
    {sort:2, title:"karamel", description:"sugar"}]; 
    const Item = ({ title, description }) => (
      <View>
        <Text style={styles.title}>{title} </Text>
        <Text>{description} </Text>
      </View>
    );
    
    const renderItem = ({ item }) => (
      <Item title={item.title} description={item.description} />
    );
    return (
      <View style={styles.basket}>
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.sort}
          />
        )}
      </View>
    );
    







}
const styles = StyleSheet.create({
    title: {
      flex:1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    basket: {
        flex:1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
  }
});