import { useState } from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import {links, social} from './data'

function App() {
  

  function toggleModal() {}
  function toggleSidebar() {}

  return (
    <section>
      <Home/>
      <Modal />
      <Sidebar social={social} links={links}/>
    </section>
  );
}

export default App;
