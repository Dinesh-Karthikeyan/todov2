'use client'
import React, { useState } from 'react'
import './authenticate.css'

function Authenticate() {
    const [newUser, setNewUser] = useState(false);
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState('')
    const [confPass, setConfPass] = useState('')

    let confirmLabel = <label>
        <p className={confPass? "above" : "center"}>Confirm password</p>
        <input type="password" placeholder='Confirm your password' value={confPass} onChange={e => setConfPass(e.target.value)}/>
    </label>;
    return (
        <>
            <main>
                <div className='login'>
                    <h1>
                        {newUser ? "Sign UP" : "Log IN"}
                    </h1>
                </div>
                <div className='formbox'>
                    <form action="" onSubmit={e => e.preventDefault()}>
                        <label>
                            <p className={email? "above" : "center"}>Email</p>
                            <input type="email" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <p className={pass?"above" : "center"}>Password</p>
                            <input type="password" placeholder='Enter your password' value={pass} onChange={(e => setPass(e.target.value))}/>
                        </label>
                        {newUser && confirmLabel}
                        <button onClick={() => {setNewUser(!newUser)}}>{newUser? "Sign UP" : "Log IN"}</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Authenticate