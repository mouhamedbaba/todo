import react from 'react';
import ColumnContainer from '../components/ColContainer';
import KanbanHeader from '../components/HanbanHeader';
import Vertical from '../components/bases/Navbar';
import Top1 from '../components/bases/Top1';
import Top2 from '../components/bases/Top2';

const Widgets = () => {
    return (
        <main class="main" id="top" >
        <div class="container-fluid" data-layout="container-fluid">
          <Vertical/>
          <div class="content">
            {/* <Top1/> */}
            <Top2/>
            <KanbanHeader/>
            <ColumnContainer/>
          </div>
        </div>
      </main> 

    );
};

export default Widgets;

    