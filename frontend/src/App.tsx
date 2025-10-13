import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignupPage } from './pages/SignupPage'
import { SigninPage } from './pages/SigninPage'

function App() {
 

  return <BrowserRouter>
  <Routes>
    <Route path='/signup'element={<SignupPage/>}></Route>
    <Route path='/signin'element={<SigninPage/>}></Route>
  </Routes>
  </BrowserRouter>
}

export default App
