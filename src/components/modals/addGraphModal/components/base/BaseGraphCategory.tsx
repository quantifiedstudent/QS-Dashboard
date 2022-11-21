import { Spacer, Text } from "@nextui-org/react";
import styles from "../../style/baseGraphCategory.module.scss";

interface BaseGraphCategroyProps {
  header: string;
  children: JSX.Element;
}

const BaseGraphCategory = (props: BaseGraphCategroyProps) => {
  return (
    <div>
      <Text h4>{props.header}</Text>
      <Spacer y={1} />
      <div className={styles.graph_card_container}>
        <div className={styles.inner_graph_card_container}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default BaseGraphCategory;
