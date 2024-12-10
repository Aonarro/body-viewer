import './App.css'
import Login from "./components/Login.jsx";
import {Route, Routes} from "react-router";
import Chat from "./components/Chat.jsx";

function App() {

  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
  )
}

export default App
