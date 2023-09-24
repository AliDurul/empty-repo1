import addAvatar from '../img/addAvatar.png'


const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lee Production</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="text" placeholder="Display Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <label htmlFor="file">
                        <img src={addAvatar} alt="add image" />
                        <span>Add an avatar</span>
                    </label>
                    <input style={{ display: 'none' }} type="file" id="file" />
                    <button type="submit">Sign Up</button>
                </form>
                <p>You don not have an account yet ? <span> Register</span></p>
            </div>
        </div>
    )
}

export default Login