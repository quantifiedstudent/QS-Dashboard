import React, {ReactNode} from "react";

interface BaseButtonProps {
    filled: boolean;
    onPress: () => void;
    children: ReactNode;
}

const BaseButton = (props: BaseButtonProps) => {

    return (
        <div className="outline outline-2 outline-qs-blue-main text-sm text-qs-blue-main rounded-sm hover:cursor-pointer" onClick={props.onPress}>
            <div className={props.filled ? "bg-qs-blue-main text-white px-3 py-2" : "px-3 py-2"}>
                {props.children}
            </div>
        </div>
    );
}

export default BaseButton;