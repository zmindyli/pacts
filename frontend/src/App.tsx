import React, { useState } from 'react';
import Dashboard from './Dashboard';
import GroupPage from './GroupPage';

function App() {
  const [currentPage, changePage] = useState(0); // pass state down to children
  switch (currentPage) {
    case 0:
      return (
        <Dashboard callback={(pageId: number) => changePage(pageId)} />);
    case 1:
      return (
        <GroupPage
          name="DTI"
          desc="Propel is an incubator by the Cornell Design and Tech Initiative that provides 
            funding and connections for Cornell-focused student projects. 
            It addresses the lack of available resources to student projects on campus. "
          callback={(pageId: number) => changePage(pageId)} />);
    case 2:
      return (
        <GroupPage
          name="Science Olympiad"
          desc="Welcome to science"
          callback={(pageId: number) => changePage(pageId)} />
      )
    case 3:
      return (
        <GroupPage
          name="E.Motion"
          desc="It's time to dance"
          callback={(pageId: number) => changePage(pageId)} />
      );
    default:
      return <Dashboard callback={(pageId: number) => changePage(pageId)} />;
  }
}

export default App;
