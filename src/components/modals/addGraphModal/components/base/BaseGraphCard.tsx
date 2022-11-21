import { Text } from "@nextui-org/react";
import BaseButton from "@Components/misc/button/baseButton";
import BaseCard from "@Components/misc/card/baseCard";

interface GraphCardProps {
  handler: Function;
  children: string;
}

const GraphCard = (props: GraphCardProps) => {
  return (
    <BaseCard>
      <BaseButton onPress={() => props.handler()}>
        <Text>{props.children}</Text>
      </BaseButton>
    </BaseCard>
  );
};
export default GraphCard;
