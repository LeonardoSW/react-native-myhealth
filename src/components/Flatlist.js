import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'

import CardVacina from '../components/CardVacinaComponent'

export default function(props){

    const produtos = props.listItems;

    return(
        <View style = {styles.flatListStyle}>
            <FlatList
                style={styles.flatList}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CardVacina
                                            title={item.title} 
                                            dosagem={item.dosagem}
                                            date={item.date}
                                            dateNextDose={item.dateNextDose}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatListStyle:{
        width: "90%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    flatList:{
        display: "flex"
    }
})