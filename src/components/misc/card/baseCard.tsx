import { Card } from "@nextui-org/react";

interface BaseButtonProps {
    onPress?: () => void;
    children: JSX.Element;
}

const BaseCard = (props: BaseButtonProps) => {
    return (
        <Card
            onPress={props.onPress}
            css={{
                backgroundColor: "#FCFCFC",
                border: "1px solid #DBDBDB",
                boxShadow: "0px 2px 3px #0000000D",
                filter: "none",
                padding: "$6",
                minWidth: "300px",
                maxWidth: "300px",
                marginRight: "$10",
            }}
        >
            {props.children}
        </Card>
    );
};

export default BaseCard;
