import React from "react";
import {Route} from 'react-router-dom'
import {HeaderText} from "./components/HeaderText"
import {Nav} from "./components/Nav"
import {Hero} from "./components/Hero"
import {Home} from "./components/Home"
import {Form} from "./components/Form"
import './index.css'


const App = () => {

  return (
    <>
      
        <h1>Lambda Eats</h1>
      
      <section id="headerBox">
        <HeaderText /> <Nav />
      </section>
      <section id="heroBox">
        <Hero />
      </section>
      <section id="mainContent">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form />
        </Route>
      </section>

      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
