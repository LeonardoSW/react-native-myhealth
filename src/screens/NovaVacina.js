import React from 'react'
import {Text, View, TextInput, Image, StyleSheet} from 'react-native'

export default function NovaVacina(){
    return(
    <View>
        <View style ={styles.screen}>
            <View style ={styles.containerTextFields}>
                <View style ={ styles.areaCampos}>
                    <Text style={styles.textFields}>Data de vacinação</Text>
                </View>

                <View style ={ styles.areaCampos}>
                    <Text style={styles.textFields}>Vacina</Text>
                </View>

                <View style ={ styles.areaCampos}>
                    <Text style={styles.textFields}>Dose</Text>
                </View>

                <View style ={ styles.areaCampos}>
                    <Text style={styles.textFields}>Comprovante</Text>
                </View>

                <View style ={ styles.areaCampos}>
                    <Text style={styles.textFields}>Próxima vacinação</Text>
                </View>
            </View>

            <View style ={styles.containerFields}>
                <View style ={ styles.areaCampos}>
                    <TextInput style = {styles.textInputDate} />
                </View>

                <View style ={ styles.areaCampos}>
                    <TextInput style={styles.textInputText}/>
                </View>

                <View style ={ styles.areaCampos}>
                    <Text style={styles.textFields}>Dose</Text>
                </View>

                <View style ={ styles.areaCampos}>
                    <Text style={styles.textFields}>Comprovante</Text>
                </View>

                <View style ={ styles.areaCampos}>
                    <TextInput style = {styles.textInputDate} />
                </View>
            </View>
        </View>
    </View>)

/*



*/
}

const styles = StyleSheet.create (
    {
        screen:{
            backgroundColor: "#ADD4D0",
            height: "100%",
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: 'row',

        },
        containerTextFields:{
            marginTop: "12%",
            width:"45%",
            height: "50%",
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundColor: '#abc'
        },
        containerFields:{
            marginTop: "12%",
            width:"45%",
            height: "50%",
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            backgroundColor: '#abc'
        },
        areaCampos:{
            display:'flex',
            flexDirection: 'row'
        },
        textFields:{
            marginTop: 12,
            color: "#fff"
        },
        textInputDate:{
            marginTop: 10,
            width: 110,
            height: 22,
            backgroundColor: "#fff"
        },
        textInputText:{
            marginTop: 10,
            width: 110,
            height: 22,
            backgroundColor: "#fff"
        }

    })