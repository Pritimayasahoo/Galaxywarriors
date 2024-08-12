import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Details = ({route}) => {
  const { Avatar } = route.params;  
  return (
    <View style={styles.container}>
    <Image
     style={styles.imgstyle}
     source={{
       uri: Avatar.image,
     }}
   />
   <Text style={styles.textstyle}>Name:- {Avatar.name}</Text>
   <Text style={styles.textstyle}>Species:- {Avatar.species}</Text>
   <Text style={styles.textstyle}>Status:- {Avatar.status}</Text>
   <Text style={styles.textstyle}>Gender:- {Avatar.gender}</Text>
   <Text style={styles.textstyle}>Total episodes:- {Avatar.episode.length}</Text>
 </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        marginVertical:5,
        marginHorizontal:10,
        borderRadius:5,
        //width:350,
        alignItems:"center",
        backgroundColor:"lightgrey"
      },
      imgstyle:{
          width:300,
          height:200,
          borderRadius:5,
          marginTop:5
      },
      textstyle:{
         fontSize:20,
         fontWeight:"bold",
         
      }
})