import { NextPage } from "next";
import { useState } from "react";

import GridLayout from "../components/dashboardLayout/GridLayout";
import Block from "../components/dashboardLayout/Block";
import AddBlockModal from "../components/AddBlockModal";

const Dashboard: NextPage = () => {
  const [blocks, addNewBlock] = useState(Array<object>);
  const [modalOpen, showModal] = useState(false);
  const addBlock = () => {
    addNewBlock((blocks) => [...blocks, { component: <Block /> }]);
  };
  return (
    <>
      <AddBlockModal
        show={modalOpen}
        handleClose={() => showModal(false)}
        handleClick={() => addBlock()}
      >
        <p>Modal</p>
      </AddBlockModal>
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
