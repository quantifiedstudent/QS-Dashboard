import { FunctionComponent } from "react";
import { BaseUser } from "../interfaces/User";

const WelcomeMessage: FunctionComponent<BaseUser> = (props: BaseUser) => {
  const greetingMessage = () => {
    const time = new Date().getHours();
    if (time >= 0 && time < 12) return "moring";
    if (time >= 12 && time < 18) return "afternoon";
    if (time >= 18 && time < 0) return "evening";
  };

  greetingMessage();
  return (
    <div>
      <h3>{`good ${greetingMessage()} ${props.Username}`}</h3>
    </div>
  );
};

export default WelcomeMessage;
