import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "./HomePage";
import WebTeam from "./team/webTeam";
const router=createBrowserRouter([
  {index:true,element:<HomePage/>},
  {path:'/web-team',element:<WebTeam/>}
])
function App() {
  return <RouterProvider router={router}/>
}

export default App;
