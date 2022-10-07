import { NextPage } from "next";
import { useState } from "react";

import GridLayout from "../components/dashboardLayout/GridLayout";
import AddBlockModal from "../components/AddBlockModal";
import { QsGraph } from "../interfaces/QSGraphs";
import ChartContainer from "../components/dashboardLayout/ChartContainer";

const Dashboard: NextPage = () => {
  const [blocks, addNewBlock] = useState(Array<object>);
  const [modalOpen, showModal] = useState(false);
  const handleCallback = (data: QsGraph) => {
    addNewBlock((blocks) => [
      ...blocks,
      { component: <ChartContainer QsGraph={data} /> },
    ]);
  };
  return (
    <>
      <AddBlockModal
        handleClose={() => showModal(false)}
        childToParent={handleCallback}
        show={modalOpen}
      />
      <div>
        <span className="dashboard-header">
          <h1>Dashboard</h1>
          <h1 onClick={() => showModal(true)}>+</h1>
        </span>
        <GridLayout layout={blocks} />
      </div>
    </>
  );
};

export default Dashboard;
