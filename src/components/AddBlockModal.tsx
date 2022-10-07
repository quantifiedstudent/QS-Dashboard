import { QsGraph } from "../interfaces/QSGraphs";

const AddBlockModal = ({ handleClose, childToParent, show }: any) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={() => childToParent(QsGraph.GRADE)}>
          Grade graph
        </button>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default AddBlockModal;
