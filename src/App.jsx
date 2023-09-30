import { Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ChatRoom from "./pages/ChatRoom"
import { Route } from "react-router-dom"
import Login from "./pages/Login"
import { PrivateRoute } from "./routes/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"

function App() {


  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<PrivateRoute />}>
            <Route path="" element={<ChatRoom />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
