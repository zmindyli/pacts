import React, { useState } from 'react';
import Dashboard from './Dashboard';
import GroupPage from './GroupPage';

function App() {
  const [currentPage, changePage] = useState(""); // pass state down to children
  return (
    <div>
      {currentPage === "" ? <Dashboard callback={(page: string) => changePage(page)} /> :
        <GroupPage
          name="Propel Incubator"
          desc="Propel is an incubator by the Cornell Design and Tech Initiative that provides 
        funding and connections for Cornell-focused student projects. 
        It addresses the lack of available resources to student projects on campus. "
          callback={(page: string) => changePage(page)} />}
    </div>
  );
}

export default App;
