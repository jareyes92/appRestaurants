import React, { useState, useEffect } from 'react'
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";


export default function MyAccount() {
    const [login, setLogin] = useState(null);

    useEffect(()=> {
        firebase.auth().onAuthStateChanged(user => {
            !user ? setLogin(false)  : setLogin(true); // si el usaurio es false o null setLogin false para decir q no esta logeado, de lo contrario significa q el usuario esta logeado
        });
    }, []);

    //si login es null es q se esta haciendo una peticion para saber si esta registrado o no
    if(login === null){
        return (
            <Loading isVisible={true} text="Cargando..."/>
        )
    }

    return login ? <UserLogged/> : <UserGuest/>;  //si login es true retorna la pagina de usuario logeado sino usuario invitado

}