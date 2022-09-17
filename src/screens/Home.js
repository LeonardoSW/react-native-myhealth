import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'

import Flatlist from '../components/Flatlist'
import CardVacina from '../components/CardVacinaComponent'

function Home(props){

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

    return(
        <View style = {styles.container}>
            <View style ={ styles.areaInput}>
                <Image 
                style = {styles.imageSearch}
                source={{uri:'https://s3-alpha-sig.figma.com/img/1cf4/2516/e94cbba6c651479c7395ff40a8dcc485?Expires=1664150400&Signature=A1-H1hUlCj~8cisiIrOfA6~c2d6RoIc20EEcj2V1yYHfnBMsQnoK14rFyVtb8VGR6jwsDrrRgipUXXsyX0i1Eo8vXTDmku1RYV390hygoaGyBEjQ7sus0JxZ-7ANUmXzKn8QDY4bpVPez-OrbGtkJ96T2tWef3H8LmhV2e0E2-n~QYwA5dE8PK8feOxFvi8MK~Q1Iw3SigtOvV4NFE4QWkvP~INYGwqzKA-6QvCeIvS9wXnyafaZtO7FWnonu8ixrBfTTluOY8cetSgcehQbK6e-vfJPdCEwv-rv9F6V7jGwVTINXDhb9wdppMUUnCEtYI-fYNbdQ1Z-usoeU6OW7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}}/>
                <TextInput style={styles.input}/>
            </View>
            <View style = {styles.flatListArea}>
                <Flatlist listItems = {produtos}/>
            </View>
            <View style ={ styles.areaButton}>
                <TouchableOpacity 
                    style = {styles.botaoNovaVacina}
                    onPress = {() => props.navigation.navigate('NovaVacina')} >
                    <Text style={styles.textNovaVacina}>Nova Vacina</Text>
                </TouchableOpacity>
            </View>
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
    areaInput:{
        marginTop:10,
        width:"85%",
        alignItems:'center',
        justifyContent: 'flex-end',
        display:'flex',
        flexDirection:'row',

        backgroundColor: "#FFF",
    },
    imageSearch: {
        width: 15,
        height: 15,
        marginRight:6,
        opacity:0.3
      },
    input:{
        width: "90%",
        backgroundColor: "#fff"
    },
    flatListArea:{
        marginTop: 10,
        height: "50%",
    },
    areaButton:{
        width:"100%",
        alignItems: "center",
        height:"35%",
        justifyContent: "flex-end"
    },
    botaoNovaVacina:{
        width:100,
        height:25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#37BD6D"
    },
    textNovaVacina:{
        fontSize:12,
        color: "#FFF"
    }
});

export default Home;