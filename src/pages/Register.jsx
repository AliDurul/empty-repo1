
const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lee Production</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder="Display Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <label htmlFor="file">Import Avatar</label>
                    <input style={{display:'none'}} type="file" id="file"/>
                    <button type="submit">Sign Up</button>
                </form>
                <p>You have an account ? <span> Login</span></p>
            </div>
        </div>
    )
}

export default Register