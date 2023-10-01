import { useAuthContext } from "../context/AuthContext"

const Navbar = () => {
    const { logout, currentUser } = useAuthContext()
    console.log(currentUser);
    return (
        <div className="navbar fixed z-10 bg-neutral text-neutral-content">
            <div className=" containerWrap flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">LeeChat</a>
                {
                    currentUser &&  <button onClick={logout}>Logout</button> 
                }
            </div>
        </div>
    )
}

export default Navbar