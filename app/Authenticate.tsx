'use client'
import React, { useState } from 'react'

function Authenticate() {
    const [newUser, setNewUser] = useState(false);
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState('')
    const [confPass, setConfPass] = useState('')

    let confirmLabel = <label>
        <input type="password" placeholder='Confirm your password' value={confPass} onChange={e => setConfPass(e.target.value)}/>
    </label>;
    return (
        <>
            <main>
                <div>
                    <h1>
                        {newUser ? "Sign UP" : "Log IN"}
                    </h1>
                </div>
                <div>
                    <form action="" onSubmit={e => e.preventDefault()}>
                        <label>
                            <input type="email" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <input type="password" placeholder='Enter your password' value={pass} onChange={(e => setPass(e.target.value))}/>
                        </label>
                        <button onClick={() => {setNewUser(!newUser)}}>{newUser? "Sign UP" : "Log IN"}</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Authenticate