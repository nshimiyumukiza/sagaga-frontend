import { BrowserRouter,Routes,Route } from "react-router"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Layout from "./pages/Layout"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route element={<Layout />}>
  <Route path="/"element={<Home />}/>
  <Route path="/login"element={<Login />}/>
  <Route path="/register"element={<Register />}/>
  </Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
