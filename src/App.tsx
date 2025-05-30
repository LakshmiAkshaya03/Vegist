import React from 'react';
import { useLocation } from 'react-router-dom';
import Routing from './Routing/Routing';
import Header from './Components/Header';

function App() {
  const location = useLocation();
  const hideHeaderOnPaths = ['/login'];
  const shouldShowHeader = !hideHeaderOnPaths.includes(location.pathname);
  
 // const shouldShowSidebar = showSidebarOnPaths.some(path => location.pathname.startsWith(path));
  return (
      // <div className="flex-grow-1 p-3">
      <div className='ps-5'>
        {/* {shouldShowHeader && <Header />}  */}
        <Routing />
      </div>
  );
}

export default App;



