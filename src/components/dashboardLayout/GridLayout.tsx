import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import styles from "@Styles/components/GraphBlock.module.scss";

interface GridLayoutProps {
  layout: Array<object>;
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridLayout = (props: GridLayoutProps) => {
  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 5, md: 5, sm: 4, xs: 2, xxs: 1 }}
      rowHeight={120}
      width={1000}
      isBounded
    >
      {props.layout.map((item: any, index: number) => {
        return (
          <span
            key={index}
            className={styles.graph_block}
            data-grid={{ x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 2 }}
          >
            {item.component}
          </span>
        );
      })}
    </ResponsiveReactGridLayout>
  );
};

export default GridLayout;
