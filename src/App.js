import './App.css'
import { Routes, Route} from "react-router"

import Home from "./components/Home/Home.jsx"

function App() {

  return (

    <>

    <main>
    <Routes>

      <Route path="/" element={<Home />} />
    
    </Routes>

    </main>
    </>
  )

}

export default App
