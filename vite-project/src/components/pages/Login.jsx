import styles from "../../css folder/Login.module.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function Login() {

    const initstate = {
        firstname: "",
        lastname: "",
        phoneNumber: "",
        email: ""
    }

    const [isAuth, setIsAuth] = useState(false)
    const [formData, setFormData] = useState(initstate)

    let navigate = useNavigate()

    function handleChange(e) {
        let { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function submit() {
        if (firstname != "" && lastname != "" && phoneNumber != "" && email != "") {
            setIsAuth(true)
            localStorage.setItem('loginDetails', JSON.stringify(formData));
            navigate("/home")
        }
        else{
            alert("Enter all fields")
        }

        console.log(formData)
        
    }

    const { firstname, lastname, phoneNumber, email } = formData;

    return (
        <div className={styles.container}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
                className={styles.formDiv}
            >
                <TextField required id="outlined-basic" name="firstname" value={firstname} onChange={handleChange} label="First Name" variant="outlined" />
                <TextField required id="outlined-basic" name="lastname" value={lastname} onChange={handleChange} label="Last Name" variant="outlined" />
                <TextField required id="outlined-basic" name="phoneNumber" value={phoneNumber} onChange={handleChange} label="Phone Number" variant="outlined" />
                <TextField required id="outlined-basic" name="email" value={email} onChange={handleChange} label="Email address" variant="outlined" />
            </Box>
            <Box>
                <Button onClick={submit} variant="contained">SUBMIT</Button>
            </Box>
        </div>
    )
}