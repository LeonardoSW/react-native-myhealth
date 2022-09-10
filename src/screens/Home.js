import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

import CardVacina from '../components/CardVacinaComponent'

function Home(){
    return(
        <ScrollView style = {styles.container}>
            <CardVacina 
                title={'BCG'} 
                dosagem={'Dose única'}
                date={'11/06/2022'}
                imageUrl={'../images/vacina1.png'}
                dateNextDose={'11/10/2023'}
            />
            <CardVacina 
            title={'BCG'} 
            dosagem={'Dose única'}
            date={'11/06/2022'}
            imageUrl={'../images/vacina1.png'}
            dateNextDose={'11/10/2023'}
            />
            <CardVacina 
            title={'BCG'} 
            dosagem={'Dose única'}
            date={'11/06/2022'}
            imageUrl={'../images/vacina1.png'}
            dateNextDose={'11/10/2023'}
            />
            <CardVacina 
                title={'BCG'} 
                dosagem={'Dose única'}
                date={'11/06/2022'}
                imageUrl={'../images/vacina1.png'}
                dateNextDose={'11/10/2023'}
            />
            <CardVacina 
                title={'BCG'} 
                dosagem={'Dose única'}
                date={'11/06/2022'}
                imageUrl={'../images/vacina1.png'}
                dateNextDose={'11/10/2023'}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        width: "100%",
        backgroundColor: "#add4d0"
    },
    containerCardVacina:{
        width:"45%",
        height:130,
        display:'flex',
        alignItems:'center',
        borderRadius:10,
        
        
        backgroundColor:"#FFF"
    }

});

export default Home;