import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/common/Sidebar';
import Dashboard from './components/pages/Dashboard';
import Labels from './components/pages/Labels';
import Racks from './components/pages/Racks';
import Operations from './components/pages/Operations';
import Templates from './components/pages/Templates';
import Presets from './components/pages/Presets';
import Users from './components/pages/Users';

const App = () => {
  
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/racks" element={<Racks />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/presets" element={<Presets />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
