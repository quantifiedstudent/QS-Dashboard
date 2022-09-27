const AddBlockModal = ({ handleClose, handleClick, show, children }: any) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p onClick={handleClick}>Add block</p>
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default AddBlockModal;
