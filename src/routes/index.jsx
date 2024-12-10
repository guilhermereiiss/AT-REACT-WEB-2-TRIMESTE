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
      
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<NotFound />} />
      
      <Route path="/Central" element={<PrivateRoute element={<Central />} />} />
      <Route path="/form" element={<PrivateRoute element={<Form />} />} />
      <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
