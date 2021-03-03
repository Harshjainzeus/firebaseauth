import React from "react";
import firebase from "firebase/app"
import {useHistory} from "react-router-dom"

export default function Googlesignin(){

    const history = useHistory();
    const onSubmit=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user)
            history.push("/");
            // ...
        }).catch((error) => {
            console.log(error)
  });
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={onSubmit}>
                login With google
            </button>
        </div>
    )

}