import { useState } from "react"
import { Auth } from "./components/Auth"
import { Home } from "./components/Home"

import './App.css'
function App() {

  const [logado, setLogado] = useState(false)

  return logado ? 
  <Home />
  :
  <Auth setLogado={setLogado}/>
}

export default App
