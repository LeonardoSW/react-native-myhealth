import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'

import CardVacina from '../components/CardVacinaComponent'

const produtos = [
    {
        id: "1",
        title:"BCC",
        dosagem: "Dose única",
        date: "16/03/2022",
        dateNextDose: "16/02/2023"
    },
    {
        id: "2",
        title:"BCG",
        dosagem: "1ª dose",
        date: "16/03/2022",
        dateNextDose: "16/02/2023"
    },
    {
        id: "3",
        title:"ABC",
        dosagem: "2ª dose",
        date: "16/03/2022",
        dateNextDose: "16/02/2023"
    },
    {
        id: "4",
        title:"ABC",
        dosagem: "2ª dose",
        date: "16/03/2022",
        dateNextDose: "16/02/2023"
    },
    {
        id: "5",
        title:"ABC",
        dosagem: "2ª dose",
        date: "16/03/2022",
        dateNextDose: "16/02/2023"
    },
    {
        id: "6",
        title:"ABC",
        dosagem: "2ª dose",
        date: "16/03/2022",
        dateNextDose: "16/02/2023"
    },
    {
        id: "7",
        title:"ABC",
        dosagem: "2ª dose",
        date: "16/03/2022",
        dateNextDose: "16/02/2023"
    },
    {
        id: "8",
        title:"ABC",
        dosagem: "2ª dose",
        date: "16/03/2022",
        dateNextDose: "16/02/2023"
    },
    {
        id: "9",
        title:"ABC",
        dosagem: "2ª dose",
        date: "16/03/2022",
        dateNextDose: "16/02/2023"
    },
]

export default function(){
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