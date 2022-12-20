import React from "react";
import Datapoint from "@Components/modals/addGraph/components/Datapoint";
import GraphCard from "@Components/modals/addGraph/components/GraphCard";

interface DataPointsMenuProps {
    activeDatapoint: string;
    ActiveDatapointHandler: (menu: string) => void;
    datapoints: string[];
}

const DataPointsMenu = (props: DataPointsMenuProps) => {

    const CheckActive = (datapoint: string) => {
        return datapoint === props.activeDatapoint
    }

    return (
        <div className="outline outline-2 outline-gray-100 w-full h-full rounded-lg flex flex-col">
            <div className="text-sm p-3">
                Select data points
            </div>
            <div className="bg-gray-100 w-full box-content rounded-b-lg flex-auto">
                {Array.from({ length: props.datapoints.length }, (_, index) => (
                    <div key={index} className="relative" onClick={() => props.ActiveDatapointHandler(props.datapoints[index])}>
                        <Datapoint text={props.datapoints[index]} active={CheckActive(props.datapoints[index])}/>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default DataPointsMenu;