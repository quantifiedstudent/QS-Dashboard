import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

import AddBlockModal from "@Components/modals/AddBlockModal";
import ChartContainer from "@Components/charts/ChartContainer";
import GridLayout from "@Components/dashboardLayout/GridLayout";
import Header from "@Components/header";

import { QsGraph } from "@Interfaces/graph/QSGraphs";
import { gridComponent } from "@Interfaces/gridComponent";

const Dashboard: NextPage = () => {
  const [BLOCKS, ADD_NEW_BLOCK] = useState(Array<QsGraph>);
  const [MODAL_OPEN, SHOW_MODAL] = useState(false);
  const handleCallback = (data: QsGraph) => {
    ADD_NEW_BLOCK((blocks) => [...blocks, data]);
  };
  return (
    <>
      <AddBlockModal
        handleClose={() => SHOW_MODAL(false)}
        graphToAdd={handleCallback}
        show={MODAL_OPEN}
      />
      <div>
        <Header />
        <span className="dashboard-header">
          <h1 onClick={() => SHOW_MODAL(true)}>+</h1>
        </span>
        <GridLayout layout={BLOCKS} />
      </div>
    </>
  );
};

export default Dashboard;
