
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FetchData from "./FetchData"
import { Container } from '@mui/material';
import Header from "./Header";
import Filter from "./Filter";


const router = createBrowserRouter ([
  {
    path: "/",
    element: <FetchData/>
    // errorElement: <h1>ERROR PAGE</h1>
  } ,
  {
    path: "/links",
    element: <div>WELCOME</div>
  }
] )


function App ( ) {
  return (
    <Container>
       <Header/>
       <Filter/>
      <RouterProvider router={router}  />
     
    </Container>
  )
  
}

export default App;