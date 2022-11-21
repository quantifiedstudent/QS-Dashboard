import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store";

import { WidthProvider, Responsive } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import { BaseQsGraphShape } from "@Services/graph/QSGraphs";

import ChartContainer from "@Components/graphs/QsGraphContainer";

import styles from "./style.module.scss";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridLayout = () => {
  const graphs = useSelector((state: RootState) => state.dashboard.graphs);

  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 3, md: 3, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={115}
      isBounded
    >
      {graphs.map((item: BaseQsGraphShape, index: number) => {
        return (
          <span
            key={index}
            className={styles.graph_block}
            data-grid={{
              x: 0,
              y: 0,
              w: item.options.width,
              h: item.options.height,
              minW: item.options.width,
              minH: item.options.height,
              isResizable: item.options.resizable,
            }}
          >
            {<ChartContainer QsGraph={item} />}
          </span>
        );
      })}
    </ResponsiveReactGridLayout>
  );
};

export default GridLayout;
