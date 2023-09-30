import { useAuthContext } from "../context/AuthContext";

const Login = () => {

  const { loginGoogle } = useAuthContext()
  const hadnleLogin = async () => {
    try {
      await loginGoogle()

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
          <p className="py-6"> Join the conversation, meet new people, and make connections in one shared room.</p>
          <button className="btn btn-neutral dark:btn-primary" onClick={hadnleLogin}>LOGIN WITH GOOGLE</button>
        </div>
      </div>
    </div>
  )
}

export default Login