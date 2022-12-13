import { Button, Loading } from "@nextui-org/react";
import style from "./style.module.scss";

interface BaseButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  children: JSX.Element;
}

const BaseButton = (props: BaseButtonProps) => {
  return (
    <Button
      auto
      onPress={props.onPress}
      disabled={props.disabled || props.loading}
      size="lg"
      css={{
        backgroundColor: "#FCFCFC",
        border: "1px solid #DBDBDB",
        boxShadow: "0px 2px 3px #07070714",
        borderRadius: "7px",
      }}
    >
      {props.loading ? (
        <Loading type="points-opacity" color="currentColor" size="sm" />
      ) : (
        <span className={style.button_content}>{props.children}</span>
      )}
    </Button>
  );
};

export default BaseButton;
