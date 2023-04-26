import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import ResourcePage from './Resource/ui/ResourcePage';
function App() {
  return (
    <>
      {/* {uuidv4()} */}
      {/* <hr/> */}
      {/* {crypto.randomUUID()} */}
      <ResourcePage/>
    </>
  );
}

export default App;
