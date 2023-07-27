import { Link } from "react-router-dom"
import styles from "../../css folder/Navbar.module.css"
import { useState } from "react"


export default function Navbar() {

    let isAuth = localStorage.getItem("auth")
    console.log(isAuth)

    return (
        <div className={styles.container}>
            <div><Link style={{"textDecoration":"none"}} to="/">Sign Up</Link></div>
            {/* <div><Link style={{"textDecoration":"none"}} to={isAuth?"/home":"/login"}>HOME</Link></div> */}
        </div>
    )
}