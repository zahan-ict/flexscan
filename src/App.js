import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/common/Sidebar';
import Dashboard from './components/pages/Dashboard';
import Labels from './components/pages/Labels';
import Racks from './components/pages/Racks';
import Areas from './components/pages/Areas';
import Operations from './components/pages/Operations';
import Templates from './components/pages/Templates';
import Presets from './components/pages/Presets';
import Users from './components/pages/Users';
import Roles from './components/pages/Roles';
import SignIn from './components/pages/SignIn';

const App = () => {

  return (
    <BrowserRouter>
    
      {/* <Routes>
        <Route>
          <Route path="/" element={<SignIn />} />
        </Route>
      </Routes> */}


      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/racks" element={<Racks />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/presets" element={<Presets />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
