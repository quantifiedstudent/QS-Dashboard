import React from "react";
import RoundedCheck from "@Components/modals/addGraph/components/RoundedCheck";

interface DatapointProps {
    text: string;
    active: boolean;
}

const Datapoint = (props: DatapointProps) => {

    const activeStylingHandler = () => {
        if(props.active){
            return(" outline outline-2 outline-qs-blue-main")
        }
    }

    return (
        <div className={`bg-white m-3 text-sm p-3 relative rounded-lg flex place-content-between hover:cursor-pointer ${activeStylingHandler()}`}>
            <div>
                {props.text[0].toUpperCase() + props.text.substring(1)}
            </div>
            {props.active ? <RoundedCheck /> : null}
        </div>
    );
}

export default Datapoint;