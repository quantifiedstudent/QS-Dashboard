import React, { FunctionComponent } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import styles from "../styles/components/GraphBlock.module.scss";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Grid: FunctionComponent = () => {
  const layout = [
    <div
      key="a"
      className={styles.thing}
      data-grid={{ x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 2 }}
    >
      a
    </div>,
    <div
      key="b"
      className={styles.thing}
      data-grid={{ x: 1, y: 0, w: 1, h: 2, minW: 1, minH: 2 }}
    >
      b
    </div>,
  ];

  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      width={1000}
      isBounded
    >
      {layout.map((x) => x)}
    </ResponsiveReactGridLayout>
  );
};

export default Grid;
