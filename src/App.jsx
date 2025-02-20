import { BrowserRouter,Routes,Route } from "react-router"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Layout from "./pages/Layout"

const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route element={<Layout />}>
  <Route path="/login"element={<Login />}/>
  <Route path="/register"element={<Register />}/>
  </Route>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App
