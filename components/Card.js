import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Card = ({Avatar}) => {
  const navigation = useNavigation(); 
  function details() {
    navigation.navigate("Details",{
        Avatar:Avatar
      })
  }

  return (
    <Pressable style={styles.container} onPress={details}>
       <Image
        style={styles.imgstyle}
        source={{
          uri: Avatar.image,
        }}
      />
      <Text>Name:- {Avatar.name}</Text>
      <Text>Species:- {Avatar.species}</Text>
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
      marginVertical:5,
      marginLeft:40,
      borderRadius:5,
      width:350,
      alignItems:"center",
      backgroundColor:"lightgrey"
    },
    imgstyle:{
        width:300,
        height:200,
        borderRadius:5,
        marginTop:5
    }
})