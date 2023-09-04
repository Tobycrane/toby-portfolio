import Navbar from "./components/Navbar";
import Section from "./components/Section"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/', //this is home page,
    element: <h1>THIS IS HOME PAGE</h1>
  }


])

function App() {
  return (
    <div>
  
     <RouterProvider router={router}/>

    </div>

  )
}

export default App;




