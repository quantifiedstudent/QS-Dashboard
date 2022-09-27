import React, { FunctionComponent } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import styles from "../styles/components/GraphBlock.module.scss";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Grid = (props: { layout: any }) => {
  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 }}
      rowHeight={30}
      width={1000}
      isBounded
    >
      {props.layout.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={styles.thing}
            data-grid={{ x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 2 }}
          >
            {item.component}
          </div>
        );
      })}
    </ResponsiveReactGridLayout>
  );
};

export default Grid;
