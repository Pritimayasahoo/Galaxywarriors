import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import {React, useState, useEffect} from 'react'
import { Fetchdata } from '../components/Fetchdata'
import Card from '../components/Card'

const Allcharacters = () => {
  const [pagenum,setpage] = useState(1)
  const [characters,setcharacters] = useState()

  useEffect(()=>{
            async function fetching()
                   {
                     const data=await Fetchdata(pagenum)
                     setcharacters(data.results)
                     //console.log(data)
                   }
            fetching()
  },[pagenum])

  function changepage(forward){
           if (forward){
            setpage(pagenum+1)
           }
           else{
            setpage(pagenum-1)
           }
  }

  if (characters)
  {  
    //console.log(characters[0],"all char")

    return (
    <View>
        <FlatList
        style={styles.charactercontainer}
    data={characters}
    renderItem={({item}) => <Card Avatar={item}/>}
    keyExtractor={item => item.id}
  />
    <Pressable onPress={changepage.bind(this,true)} style={styles.pagechange}>
            <Text>Next</Text>
        </Pressable>
        <Pressable onPress={changepage.bind(this,false)} style={styles.pagechange}>
            <Text>Previous</Text>
        </Pressable>
    </View>)
    return (<Card imgurl={characters[0].image} name={characters[0].name} species={characters[0].species}/>)
  }

  return (
    <View>
        
      <Text>Allcharacters</Text>
    </View>
  )
}

export default Allcharacters

const styles = StyleSheet.create({
    pagechange:{
        padding:10
    },
    charactercontainer:{
        height:"90%"
    }
})