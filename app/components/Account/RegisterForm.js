import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import * as firebase from "firebase";

export default function RegisterForm() {
    const [hidePassword, setHidePassword] = useState(true)
    const [hideRepeatPassword, sethideRepeatPassword] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const register = async () => {
        if(!email || !password || !repeatPassword) {
            console.log("Todos los campos son obligatorios")
        } else {
            if(!validateEmail(email)){
                console.log("El email no es correcto")
            } else {
                if(password !== repeatPassword) {
                    console.log("Las contrasennas no son iguales")
                } else {
                    await firebase
                        .auth()
                        .createUserWithEmailAndPassword(email.trim(),password)
                        .then(() => {
                            console.log("Usuario creado correctamente")
                        })
                        .catch(() => {
                            console.log("Error al crear la cuenta, intentelo mas tarde")
                        })

                }
            }
        }
    }
    
    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                onChange= {(e) => setEmail(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                password= {true} //especifica al input que va a ser de tipo contrasenna
                secureTextEntry={hidePassword} // para q me salgan los puntos cuando se escribe
                containerStyle={styles.inputForm}
                onChange= {(e) => setPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name={hidePassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setHidePassword(!hidePassword)}
                    />
                }
            />
            <Input
                placeholder="Repetir Contraseña"
                password= {true} //especifica al input que va a ser de tipo contrasenna
                secureTextEntry={hideRepeatPassword} // para q me salgan los puntos cuando se escribe
                containerStyle={styles.inputForm}
                onChange= {(e) => setRepeatPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name={hideRepeatPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => sethideRepeatPassword(!hideRepeatPassword)}
                    />
                }
            />
            <Button 
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={ register }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    iconRight: {
        color: "#c1c1c1"
    },
    btnContainerRegister: {
        marginTop: 20,
        width: "95%"
    },
    btnRegister: {
        backgroundColor: "#00a680"
    }
})