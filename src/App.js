import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/addTech';
import TechListModal from './components/techs/TechListModal';


function App() {
  useEffect(() => {
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <TechListModal />
        <AddTechModal />
        <EditLogModal />
        <AddLogModal />
        <AddBtn />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
