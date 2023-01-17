import React, {useEffect, useState} from "react";

import Menu from "@Components/modals/addGraph/components/Menu";
import ChooseGraph from "@Components/modals/addGraph/components/ChooseGraph";
import DataPointsMenu from "@Components/modals/addGraph/components/DataPointsMenu";
import BaseButton from "@Components/misc/buttons/BaseButton";

import data from "./mock/data.json";

interface AddGraphModalProps {
    setClose: () => void;
    show: boolean;
}

interface Data {
    categories: {
        [key: string]: {
            [key: string]: {
                [key: string]: any
            };
        };
    };
}

const AddGraph = (props: AddGraphModalProps) => {

    // Data from api (now mock)
    const json: Data = data;

    // Change active category
    const [activeCategory, SetActiveCategory] = useState("canvas");
    const ActiveCategoryHandler = (menu: string) => {
        SetActiveCategory(menu);
        SetActiveGraph("bar");
        SetActiveDatapoint("");
    }

    // Change active graph
    const [activeGraph, SetActiveGraph] = useState("bar");
    const ActiveGraphHandler = (graph: string) => {
        SetActiveGraph(graph);
        SetActiveDatapoint("");
    }

    // Change active datapoint
    const [activeDatapoint, SetActiveDatapoint] = useState("");
    const ActiveDatapointHandler = (graph: string) => {
        SetActiveDatapoint(graph)
    }

    // Get all categories
    const GetCategories = () => {
        return Object.keys(json["categories"]);
    }

    // Get all graphs based on active category
    const GetGraphs = () => {
        return Object.keys(json["categories"][activeCategory]["graphs"]);
    }

    // Get all datapoints based on active category and selected graph
    const GetDatapoints = () => {
        if(Object.keys(json["categories"][activeCategory]["graphs"]).length !== 0){
            return Object.keys(json["categories"][activeCategory]["graphs"][activeGraph]).map(key => {
                return json["categories"][activeCategory]["graphs"][activeGraph][key];
            });
        } else {
            return [];
        }
    }

    if(props.show){
        return (
            <div className="w-screen h-screen absolute left-0 top-0 z-20 flex justify-center items-center fixed overflow-y-auto">
                <div className="w-full h-full absolute bg-black/30 backdrop-blur-xs"/>
                <div className="w-5/6 h-5/6 rounded-lg bg-white place-self-center z-50 p-10 flex flex-col">
                    <div className="pb-8">
                        <div className="text-2xl font-semibold pb-4">
                            Choose a graph
                        </div>
                        <div className="text-gray-500">
                            Select a data source and import a graph
                        </div>
                    </div>
                    <Menu
                        activeCategory={activeCategory}
                        ActiveCategoryHandler={ActiveCategoryHandler}
                        categories={GetCategories()}
                    >
                        <div className="box-border flex-auto flex mt-6 gap-x-6">
                            <div className="basis-1/4">
                                <DataPointsMenu
                                    activeDatapoint={activeDatapoint}
                                    ActiveDatapointHandler={ActiveDatapointHandler}
                                    datapoints={GetDatapoints()}
                                />
                            </div>
                            <div className="basis-3/4">
                                <ChooseGraph
                                    activeGraph={activeGraph}
                                    ActiveGraphHandler={ActiveGraphHandler}
                                    graphs={GetGraphs()}
                                />
                            </div>
                        </div>
                    </Menu>
                    <div className="flex place-content-between mt-10">
                        <BaseButton filled={false} onPress={props.setClose}>Back to dashboard</BaseButton>
                        <BaseButton filled={true} onPress={props.setClose}>Next step</BaseButton>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <>
            </>
        )
    }
}

export default AddGraph;