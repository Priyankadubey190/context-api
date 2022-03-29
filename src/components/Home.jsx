import {useContext} from "react"
import {AuthContext} from '../context/AuthContext'
export function Home(){
    const {token}= useContext(AuthContext)
    console.log("hompage",token)
    const x=token
    return (
        <div>This is Homepage :{x}</div>
    )
}