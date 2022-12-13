import BaseButton from "@Components/misc/button/baseButton";
import { Modal, Text } from "@nextui-org/react";

interface BaseModalProps {
  title?: string;
  children: JSX.Element;
  visible: boolean;
  closeHandler: () => void;
}

const BaseModal = (props: BaseModalProps) => {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={props.visible}
      onClose={props.closeHandler}
      fullScreen
      blur
      css={{
        opacity: "100%",
        borderRadius: "0",
      }}
    >
      <Modal.Header justify="flex-start">
        <Text h1 size={30}>
          {props.title}
        </Text>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <BaseButton onPress={props.closeHandler}>
          <Text>Close</Text>
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default BaseModal;
