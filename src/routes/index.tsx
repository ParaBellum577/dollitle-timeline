import React from "react";
import { Routes, Route } from "react-router-dom";
import TimeLineComponent from "../pages/timeline";

interface RouterProps {}

const MainRouter: React.FC<RouterProps> = () => {
  return (
    <Routes>
      <Route key="timeline" path="/timeline" element={<TimeLineComponent />} />
    </Routes>
  );
};

export default MainRouter;
