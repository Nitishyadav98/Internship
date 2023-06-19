// import { createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; 
import HomePage from './Components/Homepage';
import Contact from './Components/Contact';
import RootLayout from './Components/Root';
import AboutUs from './Components/AboutUs';
import ErrorPage from './Pages/Error';
import RegistrationForm from './Components/RegistrationForm';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Todos from './Components/products';
import Products from './Components/products';

// const router = createBrowserRouter([
//   { path: '/',
//     element : <RootLayout/>,
//     errorElement : <ErrorPage/>,
//     children: [
//        {path: '/', element : <HomePage/>},
//        {path: '/contact', element : <Contact/>},
//        {path: '/about', element : <AboutUs/>},
//        {path: '/registration', element : <RegistrationForm/>},
//        {path: '/counter', element : <Counter/>},
//     ] }
// ])

function App() {
  return (
    <div className="App">
     {/* <RouterProvider router={router} /> */}
     <Navbar/>
     <Routes>
          <Route path='/' Component={HomePage} />          
         <Route path='/contact' Component={Contact} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/registration' Component={RegistrationForm} />
          <Route path='/counter' Component={Counter} />
          <Route path='/products' Component={Products}/>
          <Route path='*' element={<h1>Page not found</h1>} /> 
      </Routes>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
