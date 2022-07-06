import "@fontsource/montserrat";
import './App.css';
import SignUpPage from './Pages/SignUpPage';
import AboutPage from './Pages/AboutPage';
import Homepage from './Pages/Homepage';
import ErrorPage from './Pages/ErrorPage';
import { Route, Routes } from "react-router-dom";
import EditPage from "./Pages/EditPage";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer'

function App() {

  function changeTheme() {
    document.body.classList.toggle('dark-mode')
  }

  return (
    <div className="App">
      <Navbar changeTheme = {changeTheme}/>

      <Routes>
          <Route path = '/' element = {<SignUpPage/>} />
          <Route path = '/about' element = {<AboutPage/>} />
          <Route path = '/homepage' element = {<Homepage/>} />
          <Route path = '/edit-item/:id' element = {<EditPage/>} />
          <Route path="*" element={ <ErrorPage /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
