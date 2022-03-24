import { Link} from "@mui/material";
import {useEffect, useState} from "react";
import {logOut} from "./SignIn";


function SignUp(){

    const [user,setUsers]= useState(null)

     function validateUser(setUser) {
        if (localStorage.token) {
            fetch('http://localhost:4000/validate', {
                headers: {
                    Authorization: localStorage.token
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        console.log('Validation failed.')
                    } else {
                        setUser(data)
                    }
                })
        }
    }

    function signUp(email, password, name, setUser) {
        fetch('http://localhost:4000/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    localStorage.token = data.token
                    setUser(data.user)
                }
            })
    }
    useEffect(() => {
        validateUser(setUsers)
    }, [])

    if (user === null)

    return (
    <div >
        <header>
        </header>

        <div>
            <h1>Create account</h1>
            <form
                  onSubmit={e => {
                      e.preventDefault()
                      const name = e.target.name.value
                      const email = e.target.email.value
                      const password = e.target.password.value
                      signUp(email, password, name, setUsers)
                  }}
            >
                <label  htmlFor="name">Your name</label>
                <input type="name"  name="name"></input>
                <label  htmlFor="email">Email</label>
                <input type="email"  name="email"></input>
                <label htmlFor="password">Password</label>
                <input type="password"  name="password"></input>
                <button type="submit" form="signUpForm" >Sign Up</button>
            </form>
        </div>
        <div >
            <h5>Already have an account?</h5>
        </div>
        <div>
            <button >
                <Link to='/signIn'>Sign in</Link>
            </button>
        </div>
    </div>
)
    if (user != null) {
        return (
            <>
                <div>
                    <h1>Do you want to sign out {user.name}?</h1>
                    <button onClick={() => logOut(setUsers)}>Sign Out</button>
                </div>
            </>
        )
    }
}
export default SignUp
