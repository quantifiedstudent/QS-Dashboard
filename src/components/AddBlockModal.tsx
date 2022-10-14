import { QsGraph } from "@Interfaces/graph/QSGraphs";
import COMBINE_CLASS from "@Services/helpers/ClassCombiner";
import styles from "@Styles/components/AddGraphModal.module.scss";

interface AddGraphToDashbaordModalProps {
  handleClose: any;
  graphToAdd: Function;
  show: boolean;
}

const AddGraphToDashbaordModal = (props: AddGraphToDashbaordModalProps) => {
  const SHOW_HIDE_CLASS_NAME = props.show
    ? styles.display_block
    : styles.display_none;

  return (
    <div className={COMBINE_CLASS(styles.modal, SHOW_HIDE_CLASS_NAME)}>
      <section className={styles.modal_main}>
        <button onClick={() => props.graphToAdd([QsGraph.GRADE])}>
          Grade graph
        </button>
        <button
          onClick={() => props.graphToAdd([QsGraph.GRADE, QsGraph.WEATHER])}
        >
          Combined Graph
        </button>
        <button type="button" onClick={props.handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default AddGraphToDashbaordModal;
