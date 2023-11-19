import React from "react";
import Vertical from '../bases/Navbar';
import Top1 from '../bases/Top1';
import Top2 from '../bases/Top2';

const Main = () => {

  return (

    <main class="main" id="top" >
      <div class="container-fluid" data-layout="container-fluid">
        <Vertical/>
        <div class="content">
          <Top1/>
          <Top2/>
        </div>
      </div>
    </main>                   
  )
}

export default Main;