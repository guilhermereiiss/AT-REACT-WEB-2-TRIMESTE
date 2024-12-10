import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Central from "../views/Central";
import SignIn from "../views/SigIn";
import SignUp from "../views/SingUp";
import Form from "../views/Form";
import Settings from "../views/Settings";
import NotFound from "../views/NotFound";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('email') && localStorage.getItem('senha');
  return isAuthenticated ? element : <SignIn />; 
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/AT-REACT-WEB-2-TRIMESTE/" element={<Home />} />
      <Route path="/AT-REACT-WEB-2-TRIMESTE/signin" element={<SignIn />} />
      <Route path="/AT-REACT-WEB-2-TRIMESTE/signup" element={<SignUp />} />
      <Route path="/AT-REACT-WEB-2-TRIMESTE/*" element={<NotFound />} />
      
      <Route path="/AT-REACT-WEB-2-TRIMESTE/Central" element={<PrivateRoute element={<Central />} />} />
      <Route path="/AT-REACT-WEB-2-TRIMESTE/form" element={<PrivateRoute element={<Form />} />} />
      <Route path="/AT-REACT-WEB-2-TRIMESTE/settings" element={<PrivateRoute element={<Settings />} />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
