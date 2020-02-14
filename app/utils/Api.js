import * as firebase from "firebase"

export const reAuthenticate = (password) => {
    const user = firebase.auth().currentUser  //obtengo el usuario autenticado
    const credentials = firebase.auth.EmailAuthProvider.credential(
        user.email,
        password
    )
    return user.reauthenticateWithCredential(credentials)
}