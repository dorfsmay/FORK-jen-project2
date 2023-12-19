import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import AuthProvider from "./AuthContext";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Map from "./Map";
import Contact from "./Contact";
import About from "./About";
import AddForm from "./AddForm";
import UploadJson from "./UploadJson";

function App() {
  const [auth, setAuth] = useState(null);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/map",
          element: <Map />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/addform",
          element: <AddForm />,
        },
        {
          path: "/uploadjson",
          element: <UploadJson />,
        },
      ],
    },
  ]);
  return (
    <AuthProvider {...{ auth, setAuth }}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
export default App;
