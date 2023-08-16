import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import SignupPage from "./pages/signup/SignupPage";
import Service from "./pages/service/Service"
 
import {createBrowserRouter,RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home></Home>
  },
  {
    path: "/login",
    element:  <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element:  <SignupPage></SignupPage>
  },
  {
    path: "/about",
    element:  <About></About>
  },
  {
    path: "/gallery",
    element:  <Gallery></Gallery>
  },
  {
    path: "/contact",
    element:  <Contact></Contact>
  },
  {
    path: "/service",
    element:  <Service></Service>
  },
])
  
 

function App() {
  return (
    <div>
      
       
      <RouterProvider router={router} />
      
    </div>
  ) 
    
     
       
    
   
}

export default App;
