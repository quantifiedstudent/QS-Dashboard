import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import styles from "@Styles/components/ChartComponent.module.scss";
import ChartContainer from "@Components/graphs/ChartContainer";
import { QsGraph } from "@Interfaces/graph/QSGraphs";

interface GridLayoutProps {
  layout: Array<QsGraph>;
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridLayout = (props: GridLayoutProps) => {
  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 3, md: 3, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={115}
      isBounded
    >
      {props.layout.map((item: QsGraph, index: number) => {
        console.log(item);
        return (
          <span
            key={index}
            className={styles.graph_block}
            data-grid={{
              x: 0,
              y: 0,
              w: item.metadata.options.width,
              h: item.metadata.options.height,
              minW: item.metadata.options.width,
              minH: item.metadata.options.height,
              isResizable: item.metadata.options.resizable,
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
