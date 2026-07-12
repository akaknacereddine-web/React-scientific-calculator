import './App.css'
import Numberbtn from './Numberbtn.jsx'
import {Routes, Route} from "react-router-dom";
export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/calculator" element={<Numberbtn/>}/>
    </Routes>
    <div className="App">
      <Numberbtn/>
    </div>
    </div>
  )
}