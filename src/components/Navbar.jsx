import {useContext,useState} from "react"
import {AuthContext} from '../context/AuthContext'
import axios from 'axios'
 export function Navbar(){
     const [show, setShow]= useState(true)
     const {token, handletoken}= useContext(AuthContext)
     function handlechange(){
        const data={
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        
        } 
         show?setShow(false):setShow(true) 
         show? login(): handletoken("login_karooo") 
         console.log("asdgasg", token)
      
        function login(){
            axios.post("https://reqres.in/api/login", data).then(function(response){
                console.log("ok", response.data)
                handletoken(response.data.token)
            })
        }
        
     }
     return (
         <div>
            <button onClick={
                handlechange 
            }>{show?"Login":"Logout"}</button>
         </div>
     )
 }