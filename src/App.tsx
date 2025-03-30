import {Dashboard} from "./pages/dashboard"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { BrowserRouter,Routes,Route } from "react-router-dom" 
import { Navbar } from "./components/ui/navbar" 
import { Footer } from "./components/ui/footer"
import { LandingPage } from "./pages/landingPage"
function App() { 
   
  return  <BrowserRouter>
          <Routes>
                   <Route path="/" element={< LandingPage/> }></Route>
                <Route path="/signup" element={<Signup/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/" element={<Navbar />} />
            </Routes>  
  </BrowserRouter>  
 
}

export default App
