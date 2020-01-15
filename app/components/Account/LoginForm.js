import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import { withNavigation } from "react-navigation";
import Loading from "../Loading"
import * as firebase from "firebase"

function LoginForm(props) {
    const { toastRef, navigation } = props
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisibleLoading, setisVisibleLoading] = useState(false)

    const login = async () => {
        setisVisibleLoading(true)
        if(!email || !password) {
            toastRef.current.show("Todos los campos son obligatorios")
        } else {
            if(!validateEmail(email)){
                toastRef.current.show("El email no es correcto")
            }else {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                        navigation.navigate("MyAccount")
                    })
                    .catch(() => {
                        toastRef.current.show("Email o contraseña incorrecta")
                    })
            }
        }
        setisVisibleLoading(false)
    }

    return(
        <View style={styles.formContainer}>
            <Input 
                placeholder="Correo electronico" 
                containerStyle={styles.inputForm}
                onChange={(e) => setEmail(e.nativeEvent.text)}
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
                containerStyle={styles.inputForm}
                password= {true}
                secureTextEntry={hidePassword}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={ hidePassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setHidePassword(!hidePassword)}
                    />
                }    
            />
            <Button 
                title="Iniciar sesión" 
                containerStyle={styles.btnContainerLogin}    
                buttonStyle={styles.btnLogin}
                onPress={ login }
            />
            <Loading isVisible={isVisibleLoading} text="Iniciando sesion"/>
        </View>
    )
}
export default withNavigation(LoginForm)

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
    btnContainerLogin: {
        marginTop: 20,
        width: "95%"
    },
    btnLogin: {
        backgroundColor: "#00a680",
    }
})
