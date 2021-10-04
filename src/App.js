import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/ContactUs/Contact';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
         <Route path="/about">
          <About></About>
         </Route>
         <Route path="/service">
           <Service></Service>
         </Route>
         <Route path="/contact">
            <Contact></Contact>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
      </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
