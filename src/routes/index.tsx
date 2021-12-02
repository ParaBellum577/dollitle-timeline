import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TimeLineComponent from "../pages/timeline";

const MainRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          key="timeline"
          path="/timeline"
          element={<TimeLineComponent />}
        />
        <Route path="*" element={<Navigate to="/timeline" />} />
      </Routes>
    </>
  );
};

export default MainRouter;
