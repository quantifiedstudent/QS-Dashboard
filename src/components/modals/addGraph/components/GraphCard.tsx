import React, {ReactNode} from "react";

import barIcon from "@Assets/icons/chart-simple-duotone.svg"
import barHorizontalIcon from "@Assets/icons/chart-simple-horizontal-duotone.svg"
import circleIcon from "@Assets/icons/chart-pie-duotone.svg"
import checkIcon from "@Assets/icons/check-solid.svg"

import Image from "next/image";
import RoundedCheck from "@Components/modals/addGraph/components/RoundedCheck";

interface GraphCardProps {
    type: string;
    active: boolean;
}

const GraphCard = (props : GraphCardProps) => {

    // Check for icon
    const iconHandler = () => {
        switch(props.type){
            case "bar":
                return(<Image src={barIcon} alt="bar-icon" width={56} height={56}/>)
            case "bar-horizontal":
                return(<Image src={barHorizontalIcon} alt="bar-horizontal-icon" width={56} height={56}/>)
            case "circle":
                return(<Image src={circleIcon} alt="bar-circle-icon" width={56} height={56}/>)
        }
    }

    const gen = "outline outline-2 w-full h-48 rounded-lg p-6 relative mr-0 ";
    const inactiveStyle = gen + "outline-gray-100 hover:outline-qs-blue-main hover:cursor-pointer";
    const activeStyle = gen + "outline-qs-blue-main";

    return (
        <div className={props.active ? activeStyle : inactiveStyle}>
            {props.active ? (<RoundedCheck/>) : null}
            <div className="w-full h-full grid place-content-center">
                {iconHandler()}
            </div>
        </div>
    );
}

export default GraphCard;