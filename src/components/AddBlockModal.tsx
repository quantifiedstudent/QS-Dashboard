import { QsGraph } from "../interfaces/graph/QSGraphs";

interface AddGraphToDashbaordModalProps {
  handleClose: any;
  graphToAdd: Function;
  show: boolean;
}

const AddGraphToDashbaordModal = (props: AddGraphToDashbaordModalProps) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={() => props.graphToAdd(QsGraph.GRADE)}>
          Grade graph
        </button>
        <button type="button" onClick={props.handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default AddGraphToDashbaordModal;
