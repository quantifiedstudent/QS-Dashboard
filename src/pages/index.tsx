import { NextPage } from "next";
import WelcomeMessage from "../components/WelcomeMessage";
import Grid from "../components/GridLayout";
import GridLayout from "react-grid-layout";
import styles from "../styles/components/GraphBlock.module.scss";

const Dashboard: NextPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <WelcomeMessage Username="Thijmen" />
      <Grid />
    </div>
  );
};

export default Dashboard;
