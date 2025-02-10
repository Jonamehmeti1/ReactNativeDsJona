import React from 'react'
import {View, Text, FlatList} from 'react-native'

const ExerciseExample =()=>{
    const StudentList=[
        {name:"Alma", surname:"Kamberi", age:27},
        {name:"Jona", surname:"Mehmeti", age:18},
        {name:"Rrita", surname:"Canolli", age:15},
    ]
    return(
        <View>
            <Text>Hello from this screen</Text>
            <Text>Lorem Ipsum hjsjs</Text>
            <FlatList
               data={StudentList}
               renderItem={({item})=>{
                return<Text>{item.name}{item.surname}- {item.age}</Text>
               }}
            
            />

        </View>
    )
}

export default ExerciseExample;