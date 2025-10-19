import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignupPage } from './pages/SignupPage'
import { SigninPage } from './pages/SigninPage'
import { Homepage } from './pages/HomePage'
import { ProtectedRoute } from './utils/ProtectedRoute'
import { UserContextProvider } from './contexts/UserContexts'
import { GuestRoute } from './utils/GuestRoute'
import { ContentContextProvider } from './contexts/ContentType' 
import { ContentDataProvider } from './contexts/contentDataContext'


function App() {

  return <BrowserRouter>
  <UserContextProvider>
    <ContentContextProvider>
          <ContentDataProvider>  
  <Routes> 

  
      <Route element={<ProtectedRoute/>}>
      <Route path='/home'element={<Homepage/>}/>
       </Route>
  

    
    
    <Route element={<GuestRoute/>}>
        <Route path='/signup'element={<SignupPage/>}></Route>
        <Route path='/signin'element={<SigninPage/>}></Route>
    </Route>
  </Routes>
      </ContentDataProvider>
   </ContentContextProvider>
  </UserContextProvider>
  </BrowserRouter>
}

export default App
