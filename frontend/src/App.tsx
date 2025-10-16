import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignupPage } from './pages/SignupPage'
import { SigninPage } from './pages/SigninPage'
import { Homepage } from './pages/HomePage'
import { ProtectedRoute } from './utils/ProtectedRoute'
import { UserContextProvider } from './contexts/UserContexts'
function App() {
 

  return <BrowserRouter>
  <UserContextProvider>
  <Routes>
    <Route element={<ProtectedRoute/>}>
      <Route path='/home'element={<Homepage/>}/>
    </Route>
    <Route path='/signup'element={<SignupPage/>}></Route>
    <Route path='/signin'element={<SigninPage/>}></Route>
  </Routes>
  </UserContextProvider>
  </BrowserRouter>
}

export default App
