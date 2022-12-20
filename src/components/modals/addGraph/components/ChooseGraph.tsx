import React from "react";
import GraphCard from "@Components/modals/addGraph/components/GraphCard";

interface ChooseGraphProps {
    activeGraph: string;
    ActiveGraphHandler: (menu: string) => void;
    graphs: string[];
}

const ChooseGraph = (props: ChooseGraphProps) => {

    const CheckActive = (graph: string) => {
        return graph === props.activeGraph
    }

    return (
        <div className="outline outline-2 outline-gray-100 w-full h-full rounded-lg p-6 grid gap-x-6 grid-cols-3">
            {Array.from({ length: props.graphs.length }, (_, index) => (
                <div key={index} className="inline-block relative" onClick={() => props.ActiveGraphHandler(props.graphs[index])}>
                    <GraphCard type={props.graphs[index]} active={CheckActive(props.graphs[index])}/>
                </div>
            ))}
        </div>
    );
}

export default ChooseGraph;