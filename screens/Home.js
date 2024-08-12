import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { fetchData } from '../components/Fetchdata'
import Allcharacters from './Allcharacters'

const Home = ({navigation}) => {
  //Allcharacter
  function All() {
    navigation.navigate("All")
  }
  return (
    <View style={styles.container}>
      <Pressable style={[styles.cards]} onPress={All}>
        <Text style={styles.textstyle}>All Characters</Text>
      </Pressable>
      <View style={styles.row}>
       <Pressable style={[styles.cards]}>
        <Text style={styles.textstyle}>Alive Characters</Text>
       </Pressable>
       <Pressable style={[styles.cards]}>
        <Text style={styles.textstyle}>Dead Characters</Text>
       </Pressable>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
  },
  textstyle:{
    color:"red",
    fontWeight:"bold",
    fontSize:15
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  cards:{
    padding:20,
    margin:5,
    marginBottom:9,
    backgroundColor:"lightgreen"
  }
})