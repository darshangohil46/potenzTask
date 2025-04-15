import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User"
import Login from "./pages/Login"
import Navbar from './components/Navbar';
import Products from './components/Products';
import axios from 'axios';

function App() {
  const [login, setLogin] = useState(false);
  const [user, setuser] = useState({})
  const [data, setData] = useState([])

  function fetchData() {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      console.log(user);
      setLogin(true);
      setuser(user);
      fetchProductData()
    }
  }

  async function fetchProductData() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data["products"])
      console.log(response.data.products);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={login ? (
            <>
              <Navbar />
              <User user={user} />
            </>
          ) : (
            <Login />
          )
          }></Route>

          <Route path='/login' element={login ? (
            <>
              <Navbar />
              <User user={user} />
            </>
          ) : (
            <Login />
          )
          }></Route>

          <Route path='/product' element={login ? (
            <>
              <Navbar />
              <Products product={data} />
            </>
          ) : (
            <Login />
          )
          }></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App;
