import React from "react"
import {StyleSheet, Text, TextInput , View, TouchableOpacity, Image, ImageBackground} from 'react-native'
import auth from '@react-native-firebase/auth';

function Login(){
    const [email, onChangeEmail] = React.useState("");
    const [senha, onChangePass] = React.useState("");
    const [usuarioValido, onChangeUser] = React.useState(true);
    
    return(
        <View
        style={styles.container}>
           
            <View style={styles.cabecalho}>
                <Image 
                    source={ require("../images/icon-vacina.png")}
                    style={styles.icon}/>
                <Text style={styles.textLogo}>MyHealth</Text>
            </View>

            <View style={styles.subcabecalho}>
                <Text style={styles.textSubLogo}>Controle as suas vacinas e fique seguro</Text>
            </View>

            <View style = {styles.textInputArea}>
                <View style = {styles.emailInput}>
                    <Text style = {styles.emailInputText}>E-mail:</Text>
                    <TextInput
                        style= {styles.textInputStyle}
                        onChangeText={onChangeEmail}
                    />
                </View>

                <View style = {styles.senhaInput}>
                    <Text style = {styles.senhaInputText}>Senha:</Text>
                    <TextInput
                        style= {styles.textInputStyle}
                        onChangeText={onChangePass}
                    />
                </View>
                <View style = {styles.areaLoginInvalido}>
                    {usuarioValido ? null : <Text style = {styles.invalidLoginStyle}>E-mail e/ou senha inválidos.</Text>}
                </View>
                
            </View>

            <View style={styles.buttonArea}>
                <TouchableOpacity
                    style={styles.buttonEntrar}
                    onPress={LoginWithUser}>
                    <Text style = {styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonCC}>
                    <Text style = {styles.buttonText}>Criar minha conta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonES}>
                    <Text style = {styles.buttonText}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    
    function LoginWithUser(){
        
        if(email == "" || senha == ""){
            alert("Email e/ou Senha precisam ser preenchidos.");
            return null;
        }

        auth().signInWithEmailAndPassword(email, senha)
              .then( () => {
                alert('Usuario logado com sucesso!');
                onChangeUser(true);
              })
              .catch(error => {
                console.log(error);
                onChangeUser(false);
              })
    }
}

const styles = StyleSheet.create(
    {
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingHorizontal: 30,
        backgroundColor:"#a7aeac"
    },
    cabecalho:{
        height: "20%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "#333"
    },
    textLogo:{
        fontSize:40,
        color: '#419ed7',
        fontFamily: 'sans-serif-medium',
        textDecorationLine: 'underline'
    },
    icon:{
        height: '30%',
        width: '11%'
    },  
    subcabecalho:{
        height: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "#555"
    },
    textSubLogo:{
        fontSize:30,
        fontFamily: 'sans-serif-medium',
        color: '#419ed7'
    },
    textInputArea:{
        marginTop: "10%",
        height: "15%",
        display:"flex",
        justifyContent: "space-between",
        //backgroundColor:"#abc"
    },
    emailInput:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    emailInputText: {
        paddingRight: 6,
        color: "#FFF"
    },
    senhaInput:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    senhaInputText: {
        paddingRight: 6,
        color: "#FFF"
    },
    textInputStyle:{
        backgroundColor: "#FFFFFF",
        width: "85%",
        color: '#419ed7'
    },
    areaLoginInvalido:{
        marginLeft: '15%'
    },
    invalidLoginStyle:{
        color: "#FA0"
    },
    buttonArea:{
        height:"40%",
        marginTop: "5%",
        display:"flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        // backgroundColor:"#AFD"
    },
    buttonEntrar: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#49b976",
        width: "35%",
        padding: 7
      },
      buttonCC: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#419ed7",
        width: "60%",
        padding: 7
      },
      buttonES: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b5c7d1",
        width: "60%",
        padding: 4
      },
      buttonText:{
        fontFamily: 'sans-serif-medium',
        color: '#FFF'
      }
    });

export default Login;
