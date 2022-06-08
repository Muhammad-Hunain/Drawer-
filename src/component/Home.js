import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


export default function Home(props) {
    // const route = useRoute();
    // const{email,uid} = route.params
    
    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Email:{props.email}</Text>
      {/* <Text>Name:{name}</Text> */}
      <Text>UID:{props.uid}</Text>

    </View>
  )
}