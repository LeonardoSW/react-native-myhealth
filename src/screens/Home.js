import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

import Flatlist from '../components/Flatlist'
import CardVacina from '../components/CardVacinaComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Home(){
    return(
        <View style = {styles.container}>
            <View style = {styles.flatListArea}>
                <Flatlist/>
            </View>
            <TouchableOpacity>
                <Text>Nova Vacina</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#add4d0"
    },
    flatListArea:{
        height: "50%"
    }
});

export default Home;