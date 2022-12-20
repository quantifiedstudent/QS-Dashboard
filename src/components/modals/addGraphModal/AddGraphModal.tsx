import { BaseQsGraphShape } from "@Services/graph/QSGraphs";
import BaseModal from "../baseModal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";
import { addGraph } from "./store";
import styles from "./style/style.module.scss";
import DataSourceModal from "../datasourceConfigurationModal/datasourceConfigurationModal";
import CanvasGraphs from "./components/CanvasGraphs";
import AttendanceGraphs from "./components/AttendanceGraphs";
import { Spacer } from "@nextui-org/react";
import HealthGraphs from "./components/HealthGraphs";

interface AddGraphToDashbaordModalProps {
    handleClose: any;
    show: boolean;
}

const AddGraphToDashboardModal = (props: AddGraphToDashbaordModalProps) => {
    const [SourceModal, ShowDatasourceModal] = useState(false);
    const AvailableDatasources = useSelector(
        (state: RootState) => state.datasources
    );

    const dispatch = useDispatch();

    const graphHandler = (graph: BaseQsGraphShape) => {
        console.log(graph.graph);
        dispatch(addGraph(graph));
        props.handleClose();
    };

    return (
        <>
            <DataSourceModal
                handleClose={() => ShowDatasourceModal(false)}
                show={SourceModal}
            />
            <BaseModal
                title="Add graph modal"
                closeHandler={props.handleClose}
                visible={props.show}
            >
                <div>
                    <div>
                        {AvailableDatasources.canvas && (
                            <CanvasGraphs graphHandler={graphHandler} />
                        )}
                        <Spacer y={1} />
                        <AttendanceGraphs graphHandler={graphHandler} />
                        <Spacer y={1} />
                        <HealthGraphs graphHandler={graphHandler} />
                    </div>
                    <div className={styles.add_source_section}>
                        <span
                            className={styles.add_source_content}
                            onClick={() => ShowDatasourceModal(true)}
                        >
                            <p>Cant seem to find see the graph you want?</p>
                            <p>Configure a new one</p>
                        </span>
                    </div>
                </div>
            </BaseModal>
        </>
    );
};

export default AddGraphToDashboardModal;
