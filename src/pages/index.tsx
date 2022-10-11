import { NextPage } from "next";
import { useState } from "react";

import AddBlockModal from "@Components/AddBlockModal";
import ChartContainer from "@Components/dashboardLayout/ChartContainer";
import GridLayout from "@Components/dashboardLayout/GridLayout";

import { QsGraph } from "@Interfaces/graph/QSGraphs";

const Dashboard: NextPage = () => {
  const [BLOCKS, ADD_NEW_BLOCK] = useState(Array<object>);
  const [MODAL_OPEN, SHOW_MODAL] = useState(false);
  const handleCallback = (data: Array<QsGraph>) => {
    ADD_NEW_BLOCK((blocks) => [
      ...blocks,
      { component: <ChartContainer QsGraph={data} /> },
    ]);
  };
  return (
    <>
      <AddBlockModal
        handleClose={() => SHOW_MODAL(false)}
        graphToAdd={handleCallback}
        show={MODAL_OPEN}
      />
      <div>
        <span className="dashboard-header">
          <h1>Dashboard</h1>
          <h1 onClick={() => SHOW_MODAL(true)}>+</h1>
        </span>
        <GridLayout layout={BLOCKS} />
      </div>
    </>
  );
};

export default Dashboard;
