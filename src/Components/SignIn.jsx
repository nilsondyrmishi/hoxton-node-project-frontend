import {Button, TextField} from "@mui/material";
import {useState} from "react";
// import {useNavigate} from "react-router-dom";

export function logOut(setUser) {
    localStorage.removeItem('token')
    setUser(null)
}

function SignIn(){
    // const navigate = useNavigate();
    const [user, setUsers] = useState(null)



    function logIn(email, password, setUsers) {
        fetch('http://localhost:4000/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    localStorage.token = data.token
                    setUsers(data.user)
                }
            })


    }

     if (user===null)
    return(
        <div className="sign-in">
            <h2>Sign In</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.target.email.value
                    const password = e.target.password.value
                    logIn(email, password, setUsers)
                }}
            >
                <TextField
                    name="email"
                    type="email"
                    label="EMAIL ADDRESS"
                    variant="outlined"
                    required
                />
                <TextField
                    name="password"
                    type="password"
                    label="PASSWORD"
                    variant="outlined"
                    required
                />
                <Button type="submit" variant="contained" >
                    Sign In
                </Button>
            </form>
        </div>
    )
    if (user != null) {
        return (
            <>
                <div >
                    <h1>Do you want to sign out {user.name}?</h1>
                    <button onClick={() => logOut(setUsers)}>Sign Out</button>
                </div>
            </>
        )
    }
}
export default SignIn
