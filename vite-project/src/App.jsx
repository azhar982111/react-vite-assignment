
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "./components/pages/Login"
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar'
import List from './components/pages/CollapsibleList'
import CollapsibleList from './components/pages/CollapsibleList'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      {/* <Home/> */}
      {/* <CollapsibleList/> */}
    </>
  )
}

export default App
