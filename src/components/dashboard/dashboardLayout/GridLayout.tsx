import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store";

import { WidthProvider, Responsive } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import { BaseQsGraphShape } from "@Services/graph/QSGraphs";

import ChartContainer from "@Components/graphs/QsGraphContainer";

import styles from "./style.module.scss";
import {any, string} from "prop-types";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridLayout = () => {
    return(
        <></>
    )
};

export default GridLayout;
